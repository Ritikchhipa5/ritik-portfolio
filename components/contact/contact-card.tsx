"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

export default ContactCard;
