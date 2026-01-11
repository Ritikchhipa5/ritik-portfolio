import { IMAGES } from "@/assets/images";
import Image from "next/image";

import SectionHeading from "@/app/(website)/(components)/section-heading";

import BlogSection from "@/app/(website)/(components)/blog/blog-section";
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
            primaryHeading="Let’s Connect"
            secondHeading="Tell me about your project"
            paragraph="I build premium, scalable websites, apps, and digital
          experiences. Let’s collaborate and bring your idea to life"
          />

          {/* Social Cards */}
          <ContactSocialCards />

          <CalendlyButton />
        </div>
      </div>
      <BlogSection />
    </>
  );
}
