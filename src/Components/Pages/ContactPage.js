import React from "react";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import Head from "../layout/components/Head";
import Layout from "../Layout";
import ContactForm from "../layout/Contact/ContactForm";
function ContactPage() {
  const phoneNumber = "+774 521 897";
  const contactdata = "quyt40247@gmail.com";
  const address = "https://goo.gl/maps/VN1e78fNda2VxkxH6"
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow backend ideas for cross-platform models.",
      icon: FiMail,
      contact: "quytp@mor.com.vn",
      link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
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
          {ContactData.map((item, phoneNumber) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain ">
                {/* <a href={item.contact}>
                  <h2>
                    <item.icon />
                  </h2>
                </a> */}

                {item.contact.includes("@") ? (
                  <a href={`mailto:${item.contact}`}>
                  <h2>
                    <item.icon />
                  </h2>
                  </a>
                ) : (
                  <a  href={`https://www.google.com/https://goo.gl/maps/VN1e78fNda2VxkxH6/${encodeURIComponent(address)}`}>
                  <h2>
                    <item.icon />
                  </h2>
                  </a>
                )}
              </span>
              <h2 className="font-semibold mb-2 text-white">{item.title}</h2>
              <p className="mb-0 text-sm text-text leading-7">
                {/* <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a> */}

                <div className="text-blue-700 hover:text-subMain">
                  {item.contact.includes("@") ? (
                    <a href={`mailto:${item.contact}`}>{item.contact}</a>
                  ) : (
                    <a href={`tel:${phoneNumber}`}>{item.contact}</a>
                  )}
                </div>

                {item.info}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-black">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
