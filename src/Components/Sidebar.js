import React, { useState } from "react";
import image from "../Images/street suite logo-04.png";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(true);

  const navigationLinks = [
    {
      href: "example.com",
      iconClass: "fa-regular fa-building",
      text: "Home",
      isActive: true,
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-user",
      text: "People",
      count: 10,
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-hard-drive",
      text: "Dashboard",
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-lightbulb",
      text: "Performance",
      count: 20,
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-paper-plane",
      text: "Development",
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-chart-bar",
      text: "Reports",
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-circle-user",
      text: "Admin",
    },
    {
      href: "example.com",
      iconClass: "fa-regular fa-life-ring",
      text: "Settings",
    },
  ];

  return (
    <>
      <section className={isActive ? "active" : ""}>
        <div
          className="sidebar"
          onMouseEnter={() => {
            setIsActive(false);
          }}
          onMouseLeave={() => {
            setIsActive(true);
          }}
        >
          <img src={image} alt={"text for alt"} />
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={link.isActive ? "active" : ""}>
                  <span className="icon">
                    <i className={link.iconClass} />
                  </span>
                  <span className="item">{link.text}</span>
                  {link.count && <span className="count">{link.count}</span>}
                </a>
              </li>
            ))}
          </ul>
          <div className="profile">
            <div className="pro_img">
              <img
                src="https://i.imgur.com/rgiY5VZ.png"
                alt="profile_picture"
              />
            </div>
            <div className="pro_info">
              <h3>Mony Roy</h3>
              <p>Beginner</p>
            </div>
          </div>
          <div className="profile">
            <div className="pro_info">
              <h4>Street Suite 2.0</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
