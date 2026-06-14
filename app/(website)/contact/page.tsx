import { IMAGES } from "@/assets/images";
import Image from "next/image";

import SectionHeading from "@/app/(website)/(components)/section-heading";

import BlogSection from "@/app/(website)/(components)/blog/blog-section";
import WhoAmI from "@/app/(website)/(components)/who-am-i";
import ContactSocialCards from "@/components/contact/contact-social-cards";
import CalendlyButton from "@/app/(website)/contact/calendly-button";

export default function ContactPage() {
  return (
    <>
      <div className="relative w-full     py-20 overflow-hidden">
        <div className="absolute  inset-0 bg-cover bg-center opacity-90" />
        <Image
          src={IMAGES.faded_white.src}
          width={1600}
          height={1600}
          alt="Ritik"
          className=" z-10 absolute left-0 right-0 bottom-0 w-full h-[280px]"
        />
        {/* BG gradient */}
        <div className="absolute inset-0 opacity-80 bg-[url('/ellipse.png')] bg-cover bg-center" />

        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 text-center">
          <SectionHeading
            primaryHeading="Hire Me"
            secondHeading="Tell me about your project"
            paragraph="I build premium, scalable websites, apps, and digital
          experiences. Let’s collaborate and bring your idea to life"
          />

          {/* Social Cards */}
          <ContactSocialCards />

          <CalendlyButton />

          {/* Upwork profile */}
          <a
            href="https://www.upwork.com/freelancers/~01567a14a1df3e84cd?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full max-w-5xl mx-auto block group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
              <Image
                src="/upwork-profile.png"
                alt="Ritik Chhipa on Upwork"
                width={1200}
                height={800}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-sm font-dm-sans font-medium px-5 py-2.5 rounded-full flex items-center gap-2">
                  View on Upwork
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <WhoAmI />

      {/* Let me introduce myself */}
      <div className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-80 bg-[url('/ellipse.png')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 text-center">
          <SectionHeading
            primaryHeading="A quick hello"
            secondHeading="Hi, I'm Ritik"
          />
          <div className="relative mt-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UdrKswUdbhE?si=XZwTZJE7rweaYtnX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      <BlogSection />
    </>
  );
}
