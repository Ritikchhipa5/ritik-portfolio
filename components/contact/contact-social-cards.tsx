import ContactCard from "@/components/contact/contact-card";

function ContactSocialCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-16">
      {[
        {
          image: "/social-icons/gmail.svg",
          title: "Email Me",
          link: "mailto:ritikchhipa5@gmail.com",
        },
        {
          link: "https://www.linkedin.com/in/ritikchhipa5/",
          title: "LinkedIn",
          image: "/social-icons/linkedin.png",
        },
        {
          link: "https://www.upwork.com/freelancers/~01567a14a1df3e84cd",
          title: "Upwork",
          image: "/upwork.jpg",
        },
        {
          link: "https://wa.me/919001586400",
          title: "WhatsApp",
          image: "/social-icons/whatsapp.png",
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
  );
}

export default ContactSocialCards;
