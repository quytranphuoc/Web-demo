import React from "react";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import Head from "../layout/components/Head";
import Layout from "../Layout";
import ContactForm from "../layout/Contact/ContactForm";
function ContactPage() {
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow backend ideas for cross-platform models.",
      icon: FiMail,
      contact: "quytp@mor.com.vn",
    },
    {
      id: 2,
      title: "Call Us",
      info: "Distinctively exploit optimal alignments for intuitive bandwidth.",
      icon: FiPhoneCall,
      contact: "+774 521 897",
    },
    {
      id: 3,
      title: "Location",
      info: "Đà Nẵng",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout className="bg-black">
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div
          className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain ">
                <h2>
                  <item.icon />
                </h2>
              </span>
              <h2 className="font-semibold mb-2 text-white">{item.title}</h2>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a>{" "}
                {item.info}
              </p>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default ContactPage;
