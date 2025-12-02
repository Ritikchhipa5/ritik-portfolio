"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/assets/images";

const BlogCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="rounded-xl border border-gray-200 hover:shadow-md transition-all ">
        <div className="p-2">
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="placeholder"
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>

        <div className="px-3 pb-4 pt-2">
          <h2 className="mb-2  font-dm-sans">
            How to build a successful brand and business online in 2024
          </h2>

          <p className="text-muted-foreground font-dm-sans font-light line-clamp-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Divider */}
          <div className="bg-border h-px w-full my-5" role="separator" />

          {/* Author + Read time */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex shrink-0 overflow-hidden ring-input size-9 rounded-full ring-1">
                <Image
                  width={1000}
                  height={1000}
                  className="aspect-square size-full"
                  alt="avatar"
                  src={IMAGES.avatars[1].src}
                />
              </span>
              <span className="text-sm font-medium font-dm-sans">
                Ritik Chhipa
              </span>
            </div>

            <span className="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground border px-2 py-0.5 text-xs font-medium">
              10 Min Read
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
