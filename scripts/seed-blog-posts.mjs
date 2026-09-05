/**
 * Seed script — pushes all blog posts into Sanity.
 *
 * Content is written here in a small markdown-like DSL (see `buildBody`)
 * instead of raw Portable Text, so the post content stays readable and
 * diffable in git. Running this script converts it to Portable Text and
 * upserts each post by a stable `_id`, so re-running it is safe.
 *
 * Cover images and inline diagrams already live in Sanity's asset store —
 * this script references them by asset id (see IMAGES below) rather than
 * re-uploading on every run. To swap an image, upload the new file in
 * /studio, copy its asset id, and update the constant here.
 *
 * Before running, add your write token to .env:
 *   SANITY_WRITE_TOKEN=sk...
 *
 * Run with:
 *   node --env-file=.env scripts/seed-blog-posts.mjs
 */

import { createClient } from "@sanity/client";
import { randomBytes } from "node:crypto";

const client = createClient({
  projectId: "bo8z5zvu",
  dataset: "production",
  apiVersion: "2025-12-02",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const AUTHOR_ID = "4e153dde-7256-479c-9264-d78145e742e5"; // Ritik Chhipa

// Cover images + inline diagrams, uploaded once via /studio or the Sanity
// assets API. Referenced here by id so re-seeding never re-uploads them.
const IMAGES = {
  aiAgentCover: "image-dd83bab50185fc4386eedba8ec9dd081025a88af-1200x750-png",
  ragCover: "image-d5f3e35ff490504c1f597a4dae5b03f86d5bbe94-1200x750-png",
  ragPipelineDiagram: "image-fd24e79ee62dbd3ccbf50e816145adea0c94505f-1200x420-png",
  openaiCover: "image-fd42ed7c8603b74966dcaa871a4e8909706e0c1e-1200x750-png",
  multiTenantCover: "image-bcf4f01ebcbb8f64d63a24184958b1ef2dbeace0-1200x750-png",
};

// ─── Portable Text DSL ──────────────────────────────────────────────────────
// Each post's `body` is an array of items like:
//   { h2: "..." } { h3: "..." } { p: "..." } { ul: ["...", "..."] }
//   { code: { lang, filename, code } } { image: { assetId, alt } }
// `**bold**` and `` `code` `` inside p/ul text become inline marks.

function key() {
  return randomBytes(6).toString("hex");
}

function textSpan(text, marks = []) {
  return { _type: "span", _key: key(), text, marks };
}

function inlineSpans(text) {
  const spans = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > lastIndex) spans.push(textSpan(text.slice(lastIndex, m.index)));
    const token = m[0];
    if (token.startsWith("**")) spans.push(textSpan(token.slice(2, -2), ["strong"]));
    else spans.push(textSpan(token.slice(1, -1), ["code"]));
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) spans.push(textSpan(text.slice(lastIndex)));
  return spans.length ? spans : [textSpan(text)];
}

function block(style, text) {
  return { _type: "block", _key: key(), style, markDefs: [], children: inlineSpans(text) };
}

function listBlock(items) {
  return items.map((text) => ({
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: inlineSpans(text),
  }));
}

function codeBlock({ lang, filename, code }) {
  return { _type: "code", _key: key(), language: lang, filename, code };
}

function imageBlock({ assetId, alt }) {
  return { _type: "image", _key: key(), asset: { _type: "reference", _ref: assetId }, alt };
}

function buildBody(items) {
  const blocks = [];
  for (const item of items) {
    if (item.h2) blocks.push(block("h2", item.h2));
    else if (item.h3) blocks.push(block("h3", item.h3));
    else if (item.p) blocks.push(block("normal", item.p));
    else if (item.ul) blocks.push(...listBlock(item.ul));
    else if (item.code) blocks.push(codeBlock(item.code));
    else if (item.image) blocks.push(imageBlock(item.image));
  }
  return blocks;
}

function mainImage(assetId, alt) {
  return { _type: "image", asset: { _type: "reference", _ref: assetId }, alt };
}

// ─── Posts ──────────────────────────────────────────────────────────────────

const POSTS = [
  {
    slug: "how-to-build-an-ai-agent-with-next-js-and-node-js",
    title: "How to Build an AI Agent with Next.js and Node.js",
    description:
      "A simple, beginner-friendly guide to building your first AI agent using Next.js API routes and Node.js — with a working code example.",
    tags: ["AI", "Next.js", "Node.js", "AI Agent"],
    publishedAt: "2026-09-03T18:40:00.000Z",
    mainImage: mainImage(IMAGES.aiAgentCover, "How to Build an AI Agent with Next.js and Node.js"),
    body: buildBody([
      {
        p: "An AI agent is just a program that can think in steps: it looks at a task, decides what to do, maybe calls a \"tool\" (like a function or an API), looks at the result, and decides the next step — until the task is done. In this post we build a small one using Next.js and Node.js.",
      },
      { h2: "What makes it an \"agent\" and not just a chatbot" },
      {
        p: "A normal chatbot takes your message and replies with text. An agent can also take actions. For example, instead of just saying \"the weather in Delhi is 30°C\", it can actually call a `getWeather()` function to fetch real data, then use that result to answer you.",
      },
      { h2: "Step 1: Set up the API route" },
      {
        p: "In a Next.js app, agent logic usually lives in an API route, so your OpenAI key never reaches the browser. Create a new route file:",
      },
      {
        code: {
          lang: "bash",
          filename: "terminal",
          code: "mkdir -p app/api/agent\ntouch app/api/agent/route.ts",
        },
      },
      { h2: "Step 2: Give the agent one simple tool" },
      {
        p: "Let's give our agent a single tool: `getWeather`. In a real app this would call a weather API — here we fake it so the example stays simple.",
      },
      {
        code: {
          lang: "typescript",
          filename: "app/api/agent/route.ts",
          code: `import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// A "tool" is just a normal function the agent is allowed to call.
async function getWeather(city: string) {
  return \`It is sunny and 30°C in \${city}.\`;
}

const tools = [
  {
    type: "function" as const,
    function: {
      name: "getWeather",
      description: "Get the current weather for a city",
      parameters: {
        type: "object",
        properties: {
          city: { type: "string" },
        },
        required: ["city"],
      },
    },
  },
];

export async function POST(req: Request) {
  const { message } = await req.json();

  // 1. Ask the model what to do
  const first = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }],
    tools,
  });

  const toolCall = first.choices[0].message.tool_calls?.[0];

  // 2. If the model wants to use a tool, run it and send the result back
  if (toolCall?.function.name === "getWeather") {
    const args = JSON.parse(toolCall.function.arguments);
    const result = await getWeather(args.city);

    const second = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: message },
        first.choices[0].message,
        { role: "tool", tool_call_id: toolCall.id, content: result },
      ],
    });

    return Response.json({ reply: second.choices[0].message.content });
  }

  // 3. No tool needed, just return the answer
  return Response.json({ reply: first.choices[0].message.content });
}`,
        },
      },
      { h2: "Step 3: Call it from the frontend" },
      {
        code: {
          lang: "typescript",
          filename: "app/page.tsx",
          code: `async function askAgent(message: string) {
  const res = await fetch("/api/agent", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  console.log(data.reply);
}

askAgent("What's the weather in Mumbai?");
// -> "It is sunny and 30°C in Mumbai."`,
        },
      },
      { h2: "That's the whole loop" },
      {
        p: "Every AI agent, no matter how advanced, is really this same loop repeated: ask the model → let it pick a tool → run the tool → feed the result back → repeat until it has a final answer. More tools just means more `if` branches (or a loop) around this same idea.",
      },
      { h2: "A few tips before you ship it" },
      {
        ul: [
          "Keep your OpenAI key in `.env` and only call it from the server (API route), never the browser.",
          "Start with one or two tools. It's easier to debug and cheaper to run.",
          "Log every tool call while building — it's the fastest way to see why the agent did something unexpected.",
          "Add a max-steps limit so the agent can't loop forever if something goes wrong.",
        ],
      },
      {
        p: "That's it — you now have a working AI agent in Next.js and Node.js. From here you can add more tools (search a database, send an email, create a record) and the same pattern keeps working.",
      },
    ]),
  },

  {
    slug: "how-to-add-rag-to-a-saas-application",
    title: "How to Add RAG to a SaaS Application",
    description:
      "RAG (Retrieval-Augmented Generation) explained in plain language, with a simple example of adding it to a SaaS product.",
    tags: ["RAG", "AI", "SaaS", "Vector Search"],
    publishedAt: "2026-09-03T18:42:00.000Z",
    mainImage: mainImage(IMAGES.ragCover, "How to Add RAG to a SaaS Application"),
    body: buildBody([
      {
        p: "RAG stands for Retrieval-Augmented Generation. In simple words: before asking an AI model a question, you first fetch relevant information from your own data, and hand that to the model along with the question. This lets the AI answer using your data, even though it was never trained on it.",
      },
      { h2: "Why not just ask the AI directly?" },
      {
        p: "Models like GPT don't know about your product's private documents, your customers' data, or anything created after their training date. If a user asks \"What's in my invoice from last month?\", the model has no way to know that — unless you give it that information in the prompt. RAG is how you give it that information automatically.",
      },
      { h2: "The 4 steps of RAG" },
      {
        ul: [
          "**Chunk**: split your documents (docs, FAQs, support tickets) into small pieces, like 200-500 words each.",
          "**Embed**: turn each chunk into a list of numbers (a \"vector\") using an embedding model. Similar meanings end up with similar numbers.",
          "**Store**: save these vectors in a vector database (Postgres with `pgvector`, Pinecone, or similar).",
          "**Retrieve**: when a user asks something, embed their question too, find the closest matching chunks, and pass those chunks to the AI as context.",
        ],
      },
      {
        image: {
          assetId: IMAGES.ragPipelineDiagram,
          alt: "RAG pipeline: chunk, embed, store, retrieve, generate",
        },
      },
      { h2: "Example: adding RAG to a SaaS help center" },
      {
        p: "Say your SaaS has a help center, and you want users to ask questions in plain English instead of searching. Here's a working version using Next.js, Prisma, and Postgres with pgvector.",
      },
      { h3: "1. Turn on pgvector and add a table for chunks" },
      {
        p: "Before any TypeScript runs, Postgres needs the `pgvector` extension enabled and a table with a `vector` column to store embeddings in.",
      },
      {
        code: {
          lang: "sql",
          filename: "migrations/enable_pgvector.sql",
          code: `-- Run once per database
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE "DocChunk" (
  "id"        text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "content"   text NOT NULL,
  "source"    text NOT NULL,
  "embedding" vector(1536) NOT NULL, -- text-embedding-3-small outputs 1536 dims
  "createdAt" timestamptz NOT NULL DEFAULT now()
);

-- ivfflat speeds up nearest-neighbor search once you have real data volume
CREATE INDEX doc_chunk_embedding_idx
  ON "DocChunk"
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);`,
        },
      },
      { h3: "2. Chunk your docs and store their embeddings" },
      {
        code: {
          lang: "typescript",
          filename: "scripts/indexDocs.ts",
          code: `import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function indexDoc(text: string, source: string) {
  const chunks = text.match(/[\\s\\S]{1,500}/g) ?? [];

  for (const chunk of chunks) {
    const { data } = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunk,
    });

    await prisma.docChunk.create({
      data: {
        content: chunk,
        source,
        embedding: data[0].embedding, // stored in the vector column above
      },
    });
  }
}`,
        },
      },
      { h3: "3. One typed module for embed + search" },
      {
        p: "This is the part that gets reused everywhere — the help center, in-app search, a Slack bot — so it belongs in its own module, not copy-pasted into every route that needs it.",
      },
      {
        code: {
          lang: "typescript",
          filename: "lib/rag.ts",
          code: `import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface RetrievedChunk {
  content: string;
  source: string;
}

/**
 * Embeds a question and returns the closest matching chunks
 * from Postgres, ready to drop into a prompt.
 */
export async function retrieveContext(
  question: string,
  limit = 3
): Promise<RetrievedChunk[]> {
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });
  const [{ embedding }] = data;

  return prisma.$queryRaw<RetrievedChunk[]>\`
    SELECT content, source
    FROM "DocChunk"
    ORDER BY embedding <=> \${embedding}::vector
    LIMIT \${limit}
  \`;
}

export function formatContext(chunks: RetrievedChunk[]): string {
  return chunks
    .map((c) => \`Source: \${c.source}\\n\${c.content}\`)
    .join("\\n---\\n");
}`,
        },
      },
      { h3: "4. The API route, now that the logic lives elsewhere" },
      {
        code: {
          lang: "typescript",
          filename: "app/api/ask/route.ts",
          code: `import OpenAI from "openai";
import { retrieveContext, formatContext } from "@/lib/rag";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { question } = await req.json();

  const chunks = await retrieveContext(question);
  const context = formatContext(chunks);

  const answer = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: \`Answer using only this context. If the answer isn't in it, say you don't know.\\n\\n\${context}\`,
      },
      { role: "user", content: question },
    ],
  });

  return Response.json({
    answer: answer.choices[0].message.content,
    sources: [...new Set(chunks.map((c) => c.source))],
  });
}`,
        },
      },
      {
        p: "That `sources` field is worth keeping — showing users which document an answer came from is what makes people trust a RAG answer instead of double-checking it manually.",
      },
      { h2: "Tips that save you real headaches" },
      {
        ul: [
          "Small chunks (a few hundred words) retrieve better than whole documents dumped in.",
          "Always tell the model to say \"I don't know\" if the context doesn't have the answer — this avoids made-up answers.",
          "Re-index automatically whenever the source document changes, so answers don't go stale.",
          "Show the user which document/source the answer came from — it builds trust and helps them verify it.",
        ],
      },
      {
        p: "That's the core of RAG. It's not a special AI trick, it's really just: search your data first, then let the model write the answer using what it found. Once this pattern clicks, you can plug it into support bots, internal search, onboarding assistants — anywhere your SaaS has data users want to ask about.",
      },
    ]),
  },

  {
    slug: "how-to-integrate-openai-into-an-existing-saas-product",
    title: "How to Integrate OpenAI into an Existing SaaS Product",
    description:
      "A practical, step-by-step walkthrough for adding OpenAI features to a SaaS product you've already built — safely and without breaking your budget.",
    tags: ["OpenAI", "SaaS", "Next.js", "API Integration"],
    publishedAt: "2026-09-03T18:44:00.000Z",
    mainImage: mainImage(IMAGES.openaiCover, "How to Integrate OpenAI into an Existing SaaS Product"),
    body: buildBody([
      {
        p: "Adding OpenAI to a SaaS product you already have doesn't mean a rewrite. Most of the time it's: one server route, one API key, and one new button in the UI. Here's how to do it the right way.",
      },
      { h2: "Step 1: Get an API key and keep it on the server" },
      {
        p: "Sign up at platform.openai.com, create an API key, and add it to your `.env` file. Never put this key in frontend code — anyone could open dev tools and steal it.",
      },
      {
        code: {
          lang: "bash",
          filename: ".env",
          code: "OPENAI_API_KEY=sk-...",
        },
      },
      { h2: "Step 2: Install the SDK" },
      {
        code: { lang: "bash", filename: "terminal", code: "npm install openai" },
      },
      { h2: "Step 3: Create one server route for the feature" },
      {
        p: "Let's say your SaaS is a note-taking app, and you want to add a \"Summarize this note\" button. Everything AI-related lives behind one API route.",
      },
      {
        code: {
          lang: "typescript",
          filename: "app/api/summarize/route.ts",
          code: `import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { noteText } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Summarize the note in 2 short sentences." },
      { role: "user", content: noteText },
    ],
  });

  return Response.json({
    summary: completion.choices[0].message.content,
  });
}`,
        },
      },
      { h2: "Step 4: Call it from your existing UI" },
      {
        code: {
          lang: "typescript",
          filename: "components/SummarizeButton.tsx",
          code: `"use client";
import { useState } from "react";

export function SummarizeButton({ noteText }: { noteText: string }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const res = await fetch("/api/summarize", {
      method: "POST",
      body: JSON.stringify({ noteText }),
    });
    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  }

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      {summary && <p>{summary}</p>}
    </div>
  );
}`,
        },
      },
      { h2: "Step 5: Protect it — this is the part people skip" },
      {
        ul: [
          "**Auth check**: confirm the user is logged in before calling OpenAI, so strangers can't burn your API budget.",
          "**Rate limit**: cap how many requests per user per minute (e.g. with `upstash/ratelimit`), so one user can't run up your bill.",
          "**Usage limits per plan**: free-tier users get fewer AI calls than paid users — check this before calling OpenAI, not after.",
          "**Timeouts**: set a reasonable timeout so a slow AI response doesn't hang your server.",
          "**Error handling**: OpenAI's API does go down sometimes — show a friendly \"try again\" message instead of crashing.",
        ],
      },
      { h2: "Optional: stream the response" },
      {
        p: "For longer AI replies (like chat), streaming makes it feel instant instead of making users stare at a spinner. OpenAI's SDK supports this with `stream: true` — the response comes back piece by piece instead of all at once.",
      },
      {
        p: "That's really all it takes: one protected server route wrapping OpenAI's SDK, and one small UI piece calling it. You can add this same pattern to any existing feature — summarizing, rewriting, answering questions, generating content — without touching the rest of your app.",
      },
    ]),
  },

  {
    slug: "how-i-built-a-multi-tenant-saas-with-next-js-and-postgresql",
    title: "How I Built a Multi-Tenant SaaS with Next.js and PostgreSQL",
    description:
      "The isolation strategy I used, the Postgres RLS + connection-pooling gotcha that bit me, and the tests that keep tenant data from leaking — from a real multi-tenant SaaS build.",
    tags: ["SaaS", "Multi-Tenancy", "Next.js", "PostgreSQL", "Prisma", "Row-Level Security"],
    publishedAt: "2026-09-03T18:46:00.000Z",
    mainImage: mainImage(IMAGES.multiTenantCover, "How I Built a Multi-Tenant SaaS with Next.js and PostgreSQL"),
    body: buildBody([
      {
        p: "Multi-tenancy is the one architecture decision in a SaaS you don't get to quietly unmake later. Get it wrong and you either rebuild it under pressure once you have paying customers, or — worse — one tenant ends up seeing another tenant's data. I've now shipped this twice for client SaaS products, and this is the setup I reach for by default: Next.js, PostgreSQL, and Prisma.",
      },
      { h2: "What \"multi-tenant\" actually means" },
      {
        p: "One codebase, one deployment, serving many customers (\"tenants\"). Each tenant's users, projects, and data need to stay completely separate from every other tenant's — even though it's all running through the same app and, usually, the same database.",
      },
      { h2: "The three ways to isolate tenant data" },
      {
        p: "There are really only three options, and the tradeoffs are well known before you write a line of code:",
      },
      {
        ul: [
          "**Database per tenant** — each customer gets a fully separate database. Strongest isolation, but you're now running migrations across N databases every deploy. Fine at 10 tenants, painful at 100, and I wouldn't want to be the one running it at 500.",
          "**Schema per tenant** — one database, one schema per customer. Better than separate databases, but connection pooling and migrations still get messy — most Postgres pools aren't built to juggle hundreds of schemas cleanly.",
          "**Shared tables + a `tenantId` column** — one database, one schema, every tenant-owned row tagged with which tenant it belongs to. Cheapest to run, easiest to migrate, and scales to thousands of tenants if your indexes and isolation are right.",
        ],
      },
      { h2: "What I went with, and why" },
      {
        p: "Shared tables with a `tenantId` column, backed by Postgres Row-Level Security as a second layer of defense (more on that below). For a SaaS that's still finding its shape — features changing weekly, schema migrating often — running one database instead of N is the difference between a five-minute deploy and a maintenance window.",
      },
      {
        p: "The product I built this for is sitting at roughly 40 tenants right now, the largest one with just over 120k rows in its main table. Query times on the tenant-scoped indexes stay under 15ms even for that tenant. Shared-table isolation has a lot of runway before it becomes the bottleneck — you'll hit product-market-fit problems long before you hit this one.",
      },
      { h2: "Step 1: tenantId goes on every tenant-owned table" },
      {
        p: "In Prisma, that means a `tenantId` field and a composite index on every model that holds tenant data. Skip the index and you'll find out about it the hard way once a tenant's table grows — every query filtering by `tenantId` does a sequential scan instead of an index lookup.",
      },
      {
        code: {
          lang: "prisma",
          filename: "prisma/schema.prisma",
          code: `model Tenant {
  id    String @id @default(cuid())
  name  String
  slug  String @unique
  users User[]
  notes Note[]
}

model User {
  id       String @id @default(cuid())
  email    String
  tenantId String
  tenant   Tenant @relation(fields: [tenantId], references: [id])

  @@unique([tenantId, email])
  @@index([tenantId])
}

model Note {
  id       String @id @default(cuid())
  title    String
  tenantId String
  tenant   Tenant @relation(fields: [tenantId], references: [id])

  @@index([tenantId])
}`,
        },
      },
      {
        p: "Notice `email` is unique per tenant (`@@unique([tenantId, email])`), not globally unique. Two different companies both having a `hi@acme.com` shouldn't be your problem to solve.",
      },
      { h2: "Step 2: resolve the tenant before any handler runs" },
      {
        p: "Each tenant gets a subdomain — `acme.myapp.com` — and Next.js middleware reads it before the request reaches a page or API route. This is where I hit the first real gotcha: middleware runs on the Edge runtime, and Prisma can't run there. You can't just query Postgres from middleware to look up which tenant owns a subdomain.",
      },
      {
        p: "The fix is a small edge-compatible cache (I used Vercel KV) that's kept in sync whenever a tenant is created or its slug changes, so middleware never touches Postgres directly:",
      },
      {
        code: {
          lang: "typescript",
          filename: "middleware.ts",
          code: `import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const subdomain = host.split(".")[0];

  // Edge middleware can't reach Postgres directly, so subdomain -> tenantId
  // lookups are cached in KV and refreshed whenever a tenant is created.
  const tenantId = await kv.get<string>(\`tenant:\${subdomain}\`);

  if (!tenantId) {
    return NextResponse.redirect(new URL("/tenant-not-found", req.url));
  }

  const res = NextResponse.next();
  res.headers.set("x-tenant-id", tenantId);
  return res;
}

export const config = {
  matcher: "/((?!_next|api/public|favicon.ico).*)",
};`,
        },
      },
      {
        p: "Server components and API routes then read the tenant off that header — never off anything the client sends in a request body:",
      },
      {
        code: {
          lang: "typescript",
          filename: "lib/getTenantId.ts",
          code: `import { headers } from "next/headers";

export function getCurrentTenantId() {
  const tenantId = headers().get("x-tenant-id");
  if (!tenantId) throw new Error("Missing tenant context");
  return tenantId;
}`,
        },
      },
      { h2: "Step 3: two layers of isolation, not one" },
      {
        p: "Relying on \"remember to add `where: { tenantId }` to every query\" is how tenant data leaks happen — someone adds a new query at 6pm on a Friday, forgets the filter, and now tenant A can see tenant B's invoices. I use two layers so a mistake in one doesn't become an incident.",
      },
      { h3: "Layer 1 — a Prisma client extension that scopes automatically" },
      {
        p: "Instead of trusting every developer to remember the filter, the filter gets added for them, once, in a Prisma extension:",
      },
      {
        code: {
          lang: "typescript",
          filename: "lib/scopedPrisma.ts",
          code: `import { PrismaClient } from "@prisma/client";

const TENANT_SCOPED_MODELS = ["Note", "User"];

export function scopedPrisma(tenantId: string) {
  return new PrismaClient().$extends({
    query: {
      $allModels: {
        async $allOperations({ model, args, query }) {
          if (model && TENANT_SCOPED_MODELS.includes(model)) {
            args.where = { ...args.where, tenantId };
          }
          return query(args);
        },
      },
    },
  });
}`,
        },
      },
      { h3: "Layer 2 — Postgres Row-Level Security as the backstop" },
      {
        p: "Layer 1 is app code, and app code has bugs. Row-Level Security (RLS) enforces the same rule inside Postgres itself, so even a buggy query or a raw SQL escape hatch can't cross tenants:",
      },
      {
        code: {
          lang: "sql",
          filename: "migrations/enable_rls.sql",
          code: `ALTER TABLE "Note" ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON "Note"
  USING ("tenantId" = current_setting('app.tenant_id', true));`,
        },
      },
      {
        p: "That `current_setting('app.tenant_id', true)` is a session variable — your app has to set it on every request, which leads straight into the next gotcha.",
      },
      { h2: "The gotcha: RLS session variables and connection pooling" },
      {
        p: "This is the part that doesn't show up until you're running under real load. If you're on PgBouncer (or Supabase's pooler) in **transaction mode** — which is what most hosted Postgres setups use by default — a plain `SET app.tenant_id = '...'` can leak across requests, because the underlying connection gets reused by a different request before the session variable is reset.",
      },
      {
        p: "The fix is `SET LOCAL` inside an explicit transaction. `SET LOCAL` only applies for the current transaction and is automatically discarded when it ends — which lines up exactly with how transaction-mode pooling hands connections back:",
      },
      {
        code: {
          lang: "typescript",
          filename: "lib/withTenant.ts",
          code: `import { prisma } from "@/lib/prisma";

// tenantId is always ours (from getCurrentTenantId(), never client input),
// but SET doesn't support bind params — validate the shape before interpolating.
const CUID_RE = /^[a-z0-9]{20,32}$/;

export async function withTenant<T>(
  tenantId: string,
  fn: (tx: typeof prisma) => Promise<T>
) {
  if (!CUID_RE.test(tenantId)) throw new Error("Invalid tenant id");

  return prisma.$transaction(async (tx) => {
    await tx.$executeRawUnsafe(\`SET LOCAL app.tenant_id = '\${tenantId}'\`);
    return fn(tx);
  });
}`,
        },
      },
      {
        p: "That validation line isn't optional. `SET LOCAL` can't take a parameterized value the way a normal query can, so if you ever interpolate a tenant id you didn't control the shape of, you've opened a SQL injection hole. Since `tenantId` always comes from `getCurrentTenantId()` and never from the request body, checking its shape before interpolating is enough here.",
      },
      { h2: "Testing that isolation actually holds" },
      {
        p: "I don't trust this kind of thing until there's a test that tries to break it. This one lives in CI and fails the build if tenant scoping regresses:",
      },
      {
        code: {
          lang: "typescript",
          filename: "tests/tenant-isolation.test.ts",
          code: `import { describe, it, expect } from "vitest";
import { scopedPrisma } from "@/lib/scopedPrisma";

describe("tenant isolation", () => {
  it("tenant A cannot read a note that belongs to tenant B", async () => {
    const prismaA = scopedPrisma("tenant-a-id");

    const note = await prismaA.note.findFirst({
      where: { id: "note-owned-by-tenant-b" },
    });

    expect(note).toBeNull();
  });
});`,
        },
      },
      { h2: "Mistakes I'd fix if I started over" },
      {
        ul: [
          "I added the `@@index([tenantId])` late, after seed data had grown past a few thousand rows — had to ship it as a separate migration instead of getting it right from the first schema.",
          "Early on, one internal admin script queried Postgres directly with `prisma.note.findMany()` — no tenant filter, because \"it's just an internal script.\" That's exactly the kind of shortcut RLS exists to catch; the script would've quietly returned every tenant's notes if RLS hadn't been on.",
          "I didn't write the isolation test above until a few weeks in. It should be one of the first tests in the repo, not an afterthought.",
        ],
      },
      { h2: "Quick answers" },
      { h3: "Can I move a big tenant to its own database later?" },
      {
        p: "Yes — that's the actual advantage of starting with shared tables. You're not migrating a schema, just copying one tenant's rows out and pointing that tenant's config at a new connection string.",
      },
      { h3: "Does RLS slow queries down?" },
      {
        p: "Barely, if `tenantId` is indexed — Postgres folds the policy into the query plan as another `WHERE` clause. The `SET LOCAL` round-trip per transaction is the real cost, and it's small.",
      },
      { h3: "Why not just trust the Prisma extension and skip RLS?" },
      {
        p: "Because the extension is app code, and app code ships bugs. RLS is the layer that still holds when the app code doesn't.",
      },
      {
        p: "That's the whole setup: `tenantId` on every table, tenant resolved once in middleware, isolation enforced twice — once in Prisma, once in Postgres — and a test that tries to prove it wrong. If you're building something similar and want a second pair of eyes on the architecture, that's the kind of work I take on — you can book a call.",
      },
    ]),
  },
];

// ─── Seed ───────────────────────────────────────────────────────────────────

async function seed() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error("❌  SANITY_WRITE_TOKEN is not set in .env");
    console.error("   Get one from: https://www.sanity.io/manage → your project → API → Tokens");
    process.exit(1);
  }

  console.log(`\nSeeding ${POSTS.length} blog posts into Sanity...\n`);

  const transaction = client.transaction();

  for (const post of POSTS) {
    const doc = {
      _id: `post-${post.slug}`,
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      description: post.description,
      tags: post.tags,
      author: { _type: "reference", _ref: AUTHOR_ID },
      publishedAt: post.publishedAt,
      mainImage: post.mainImage,
      body: post.body,
    };

    transaction.createOrReplace(doc);
    console.log(`  + ${post.title}`);
  }

  await transaction.commit();

  console.log(`\n✅  Done! All ${POSTS.length} blog posts are in Sanity.`);
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err.message);
  process.exit(1);
});
