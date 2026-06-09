import ContactCard from "@/components/contact/contact-card";

function ContactSocialCards() {
  return (
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
          image: "/upwork.jpg",
        },
        {
          link: "https://wa.me/919001586400",
          title: "WhatsApp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png",
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
