"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IMAGES } from "@/assets/images";
import Image from "next/image";
import { BlogSection } from "@/app/(website)/(components)/blog/blog-section";

export default function ContactPage() {
  return (
    <>
      <div className="relative w-full     py-20 bg-[#EAFECF] overflow-hidden">
        <div
          className="absolute  inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${IMAGES.ellipse.src})`,
          }}
        />
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
          {/* Headline */}
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-newsreader italic font-extralight"
          >
            Let’s Connect
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl mt-4 font-newsreader italic font-light"
          >
            Tell me about your project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-gray-700 font-dm-sans max-w-xl mx-auto"
          >
            I build premium, scalable websites, apps, and digital experiences.
            Let’s collaborate and bring your idea to life
          </motion.p>

          {/* Social Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              {
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
                title: "Email Me",
                link: "mailto:ritikchhipa5@gmail.com",
              },
              {
                link: "https://www.linkedin.com/in/ritikchhipa5/",
                title: "LinkedIn",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s",
              },
              {
                link: "https://www.upwork.com/freelancers/~01567a14a1df3e84cd",
                title: "Upwork",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cib-upwork_%28CoreUI_Icons_v1.0.0%29.svg/640px-Cib-upwork_%28CoreUI_Icons_v1.0.0%29.svg.png",
              },
              {
                link: "https://www.fiverr.com/rit9001586400",
                title: "Fiverr",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fiverr_Logo_fiverr.png/1200px-Fiverr_Logo_fiverr.png?20240621044633",
              },
            ].map((contact, index) => (
              <ContactCard
                key={index}
                title={contact.title}
                image={contact?.image}
                link={contact.link}
              />
            ))}
          </div>

          {/* Calendly Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-14"
          >
            <Button size="xl" className="group  md:my-0 rounded-full">
              <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
              <span className="text-base"> Book a Call</span>
            </Button>
          </motion.div>
        </div>
      </div>
      <BlogSection />
    </>
  );
}

const ContactCard = ({
  title,
  link,
  image,
}: {
  title: string;
  link: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Link href={link} target="_blank">
      <div className="p-6 bg-white group shadow-sm border rounded-2xl flex items-center gap-4 hover:shadow-md transition-all cursor-pointer">
        <Image
          width={40}
          height={40}
          alt=""
          src={image}
          className="w-10 rounded-lg h-10"
        />
        <p className="text-md font-dm-sans flex-1 text-left ">{title}</p>
        <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
      </div>
    </Link>
  </motion.div>
);
