import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/logo.webp";

function Footer() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "Contact Us",
          link: "/contact-us",
        },
        {
          name: "Movies",
          link: "/movies",
        },
      ],
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Action",
          link: "#",
        },
        {
          name: "Romantic",
          link: "#",
        },
        {
          name: "Drama",
          link: "#",
        },
        {
          name: "Historical",
          link: "#",
        },
      ],
    },
    {
      title: "My Account",
      links: [
        {
          name: "My Favorites",
          link: "#",
        },

        {
          name: "Change Password",
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="bg-dry py-4 border border=t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="lg:leading-7 mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={text.link}
                      className="text-text inline-block w-full hover:text-subMain"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src={HeroImg}
                alt="logo"
                className="w-2/4 object-contain h-12"
              />
            </Link>
            <p className="leading-7 text-sm text-white mt-3">
              <a
                href="https://goo.gl/maps/VN1e78fNda2VxkxH6"
                className="hover:text-subMain"
              >
                <span>
                  74 Quang Trung,Thạch Thang, Hải Châu
                  <br /> Đà Nẵng
                </span>
              </a>
              <br />
              <span>Tell: +774 521 897</span>
              <br />
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                className="hover:text-subMain"
              >
                <span>Email: quytp@mor.com.vn</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
