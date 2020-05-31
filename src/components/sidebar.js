import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faLaptopCode,
  faAddressCard,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Sidebar() {
  const [isFullSideBar, setFullSideBar] = useState(false)

  let isClicked = useRef(false)

  const sideMenuOptions = [
    {
      name: "Home",
      url: "/", //TODO:Add URL
      icon: {
        icon: faHome,
        size: "lg",
      },
    },
    {
      name: "My Code",
      url: "/my-code",
      icon: {
        icon: faLaptopCode,
        size: "lg",
      },
    },
    {
      name: "About Me",
      url: "/about-me",
      icon: {
        icon: faAddressCard,
        size: "lg",
      },
    },
    {
      name: "Git Hub",
      url: "https://github.com/Mar4elius",
      icon: {
        icon: faGithub,
        size: "lg",
      },
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/igor-marchenko-126b00132/",
      icon: {
        icon: faLinkedin,
        size: "lg",
      },
    },
  ]

  function handleArrowClick() {
    isClicked.current = !isClicked.current
    setFullSideBar(isClicked.current)
  }

  return (
    <div
      className={`flex min-h-screen bg-sidebar z-10 ${
        isFullSideBar ? "side-menu-open" : "side-menu"
      }`}
    >
      <ul className="w-24 justify-center align-middle">
        <li className="flex justify-center pt-10 pb-5">
          <img
            src="../images/creator_photo.jpg"
            alt="creator-photo"
            className="h-16 w-16 rounded-full"
          />
        </li>
        <li className={`${isFullSideBar ? "fade-in" : "fade-out invisible"}`}>
          <div className="flex pl-6 flex-column text-sm text-white">
            <span>Igor Marchenko marauman@gmail.com</span>
          </div>
        </li>
        <li
          onClick={handleArrowClick}
          className="cursor-pointer flex justify-center p-6 text-white hover:text-dark-blue"
        >
          <FontAwesomeIcon
            icon={isFullSideBar ? faArrowLeft : faArrowRight}
            size="2x"
          />
        </li>
        {sideMenuOptions.map(menu => {
          return (
            <li
              key={menu.name}
              className="cursor-pointer flex justify-center p-6  hover:text-dark-blue"
            >
              <a href={menu.url}>
                <FontAwesomeIcon icon={menu.icon.icon} size={menu.icon.size} />
              </a>
              <p className={`${isFullSideBar ? "show-name" : "hide-name"}`}>
                {menu.name}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
