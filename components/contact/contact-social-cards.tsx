"use client";

import { useState } from "react";
import ContactCard from "@/components/contact/contact-card";
import ContactForm from "@/app/(website)/(components)/contact-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CONTACTS = [
  {
    image: "/social-icons/linkedin.png",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ritikchhipa5/",
  },
  {
    image: "/upwork.jpg",
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~01567a14a1df3e84cd",
  },
  {
    image: "/social-icons/whatsapp.png",
    title: "WhatsApp",
    link: "https://wa.me/919001586400",
  },
];

function ContactSocialCards() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <ContactCard
          title="Email Me"
          image="/social-icons/gmail.svg"
          onClick={() => setFormOpen(true)}
        />
        {CONTACTS.map((contact, index) => (
          <ContactCard
            key={index}
            title={contact.title}
            image={contact.image}
            link={contact.link}
          />
        ))}
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8">
          <DialogHeader>
            <DialogTitle className="font-newsreader italic text-3xl font-light text-gray-900">
              Send me a message
            </DialogTitle>
            <DialogDescription className="font-dm-sans">
              I&apos;ll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactSocialCards;
