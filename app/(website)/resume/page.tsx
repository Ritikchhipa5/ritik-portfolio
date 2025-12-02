"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="w-full text-center">
          {/* Heading 1 */}
          <h1 className="text-4xl sm:text-4xl md:text-6xl text-gray-900 lg:text-7xl font-dm-sans font-normal">
            Hi I’m Ritik
          </h1>

          {/* Heading 2 */}
          <h2 className="text-5xl md:text-7xl mb-2 lg:text-8xl text-gray-900 tracking-tight font-newsreader italic font-extralight">
            Software developer
          </h2>
        </div>

        <p className="max-w-xl mb-6 mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Building premium, scalable products with me. Creating web, mobile, UI,
          and beyond—experiences that truly work.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() => setModalOpen(true)}
            size="xl"
            className="group    md:my-0 rounded-full"
          >
            <LucideArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
            <span className="text-base"> My Resume</span>
          </Button>
        </div>
      </BackgroundLines>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {/* Modal */}
        <DialogContent className="max-w-5xl overflow-hidden w-full h-[90vh] p-0 flex flex-col">
          {/* Header */}
          <DialogHeader className="p-4 font-dm-sans font-light">
            <DialogTitle className="flex gap-4 items-center">
              <span> Resume Preview</span>
              <Link
                href={
                  "https://drive.google.com/file/d/1WJ8jcYVR4VFfCsNES50esrdgNJWCPcE-/view"
                }
                target="_blank"
              >
                <Badge>Download</Badge>
              </Link>
            </DialogTitle>
          </DialogHeader>

          {/* Iframe fills the modal */}
          <iframe
            src="https://drive.google.com/file/d/1WJ8jcYVR4VFfCsNES50esrdgNJWCPcE-/preview"
            allowFullScreen
            className="flex-1 w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
