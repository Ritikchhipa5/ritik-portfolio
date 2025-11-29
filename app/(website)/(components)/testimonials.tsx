"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { IMAGES } from "@/assets/images";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Naren Santayana",
      role: "CEO & Founder",
      avatar: IMAGES.avatars[1],
      text: "I had the pleasure of working with Ritik on several technical projects. His development and engineering skills are exceptional, consistently delivering high-quality, well-architected solutions that exceeded our expectations. Any team would be lucky to have him, and I wouldn't hesitate to work with him again in the future.",
    },
    {
      name: "Mustafa",
      role: "Founder",
      avatar: IMAGES.avatars[2],
      text: "Seamless integration and functionality. Skilled and helpful. Great to work with him.",
    },
    {
      name: "Donald",
      role: "CEO & Founder",
      avatar: IMAGES.avatars[3],
      text: "Ritik is smart and extremely hardworking. Highly recommend to anyone looking for a good dev for mobile app development!",
    },
    {
      name: "Ashley",
      role: "-",
      avatar: IMAGES.avatars[4],
      text: "Ritik jumped right in to help me with my issue, responsive and helpful. Highly recommended. Thank you!",
    },
    {
      name: "Angel",
      role: "Founder",
      avatar: IMAGES.avatars[5],
      text: "Brilliant delivery of the work by Ritik. He was really proficient and managed to delivery high quality product in a short period of time. I will definitely work with him again.",
    },
    {
      name: "Cordoba",
      role: "Founder",
      avatar: IMAGES.avatars[6],
      text: "Its been 4 months since I hv been working with Ritik. He is proactive in his approach. What I like best about him is his commitment to the project. He is very cooperative and ready to work whenever required",
    },
    {
      name: "Mr. Souvik",
      role: "Founder",
      avatar: IMAGES.avatars[1],
      text: "Ritik is a really professional individual , we were impressed with the way how he he helped us solve an issue we were facing on the wallet integration! Highly recommended!",
    },
  ];

  // Duplicate list → infinite loop
  const loopList = [...testimonials, ...testimonials];

  return (
    <section className="relative  py-10 md:py-20 px-4 max-w-7xl mx-auto ">
      <SectionHeading
        primaryHeading=" testimonials "
        secondHeading="Meet our happy clients"
      />

      {/* ⭐ Auto Scroll Wrapper */}
      <div className="relative overflow-hidden mt-12 ">
        {/* LEFT fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-20" />

        {/* RIGHT fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-20" />

        <div className="flex w-max gap-4 scale-100 animate-scroll  pause-on-hover">
          {loopList.map((t, i) => (
            <div
              key={i}
              className="bg-card border  rounded-xl p-6 space-y-6 max-w-[500px]"
            >
              <div className="flex font-dm-sans items-start justify-between ">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 bg-muted flex justify-center items-center rounded-full overflow-hidden border">
                    <Image
                      src={t.avatar}
                      width={56}
                      height={56}
                      alt={t.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-muted-foreground  text-sm">{t.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground  text-base font-dm-sans">
                &quot;{t.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
