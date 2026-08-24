export const metadata = {
  title: "Privacy Policy — Sudoku: Daily Puzzle",
  description:
    "Privacy Policy for Sudoku: Daily Puzzle. Learn what data the app collects (none required), how it's used, and your privacy rights.",
  alternates: { canonical: "https://www.ritikchhipa.xyz/apps/sudoku/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "August 25, 2026";
const SUPPORT_EMAIL = "ritikchhipa5@gmail.com";
const WEBSITE_URL = "https://www.ritikchhipa.xyz";

export default function SudokuPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-12 border-b border-border pb-8">
          <p className="text-sm font-medium text-muted-foreground">
            Sudoku: Daily Puzzle
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-10 leading-relaxed text-foreground/90">
          <section>
            <p>
              Sharpen your mind, one number at a time. Sudoku: Daily Puzzle
              brings the classic number puzzle to your phone — clean, fast,
              and built for daily play. This Privacy Policy explains what
              information the app collects, how it&apos;s used, and the
              choices you have. We built Sudoku: Daily Puzzle to be played
              with{" "}
              <strong>no sign-up required</strong>, and it does not require
              you to hand over personal information to play.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Information We Collect
            </h2>
            <p className="mt-3">
              You can play Sudoku: Daily Puzzle without creating an account
              or providing any personal information. The app stores your
              gameplay data locally on your device, including:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Puzzle progress, favorites, and saved/starred puzzles</li>
              <li>Current streak, best streak, and days played</li>
              <li>Puzzles solved by difficulty level and total time played</li>
              <li>Game settings, such as difficulty and pencil-mode notes</li>
            </ul>
            <p className="mt-3">
              This data stays on your device and is used solely to power
              features like Statistics, Favorites, and daily streak
              tracking. We do not collect your name, email address, or
              contact details through the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Analytics &amp; Diagnostics
            </h2>
            <p className="mt-3">
              We may use standard, privacy-respecting analytics and crash
              reporting tools to understand app performance and fix bugs.
              This data is aggregated and anonymized — it is not used to
              identify you personally and is not sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Sharing Puzzles
            </h2>
            <p className="mt-3">
              The Share feature lets you generate an image of a puzzle,
              including your streak and difficulty level, to share with
              friends through your device&apos;s native share options (e.g.
              Messages, WhatsApp, social apps). We do not access or store
              the contacts or accounts you share to — that exchange happens
              directly through your device&apos;s sharing tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Advertising
            </h2>
            <p className="mt-3">
              Sudoku: Daily Puzzle does not show ads. We don&apos;t serve or
              partner with ad networks inside the app, and gameplay data is
              not used for ad targeting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Sudoku: Daily Puzzle does not knowingly collect personal
              information from anyone, including children. Since no
              account or personal data is required to play, the app is
              suitable for a general audience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Data Retention &amp; Deletion
            </h2>
            <p className="mt-3">
              Your progress, streaks, statistics, and favorites are stored
              locally on your device. Uninstalling the app removes this
              data. You can also reset your progress from within the
              app&apos;s settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date. Continued use of the app after changes
              means you accept the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Contact Us
            </h2>
            <p className="mt-3">
              Questions about this Privacy Policy or your data? Reach out
              at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              or visit{" "}
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                ritikchhipa.xyz
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
