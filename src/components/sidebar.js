// React
import React, { useState, useRef } from "react"
// Support
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar() {
  const [isFullSideBar, setFullSideBar] = useState(false)
  let isClicked = useRef(false)
  const iconSize = "lg"

  const sideMenuOptionsInternal = [
    {
      name: "Home",
      url: "/", //TODO:Add URL
      icon: {
        icon: "home",
        size: iconSize,
      },
    },
    {
      name: "My Code",
      url: "/my-code",
      icon: {
        icon: "laptop-code",
        size: iconSize,
      },
    },
    {
      name: "About Me",
      url: "/about-me",
      icon: {
        icon: "address-card",
        size: iconSize,
      },
    },
  ]
  const sideMenuOptionsExternal = [
    {
      name: "Git Hub",
      url: "https://github.com/Mar4elius",
      icon: {
        icon: ["fab", "github"],
        size: iconSize,
      },
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/igor-marchenko-126b00132/",
      icon: {
        icon: ["fab", "linkedin"],
        size: iconSize,
      },
    },
  ]

  function handleArrowClick() {
    isClicked.current = !isClicked.current
    setFullSideBar(isClicked.current)
  }

  return (
    <div
      className={`flex min-h-screen bg-pink z-10 ${
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
            icon={isFullSideBar ? "arrow-left" : "arrow-right"}
            size="2x"
          />
        </li>
        {/* Internal Links */}
        {sideMenuOptionsInternal.map(menu => {
          return (
            <li
              key={menu.name}
              className="cursor-pointer flex justify-center p-6  hover:text-dark-blue"
            >
              <Link
                to={menu.url}
                activeClassName="text-dark-blue"
                state={{ activePage: menu.name }}
              >
                <FontAwesomeIcon icon={menu.icon.icon} size={menu.icon.size} />
              </Link>
              <p className={`${isFullSideBar ? "show-name" : "hide-name"}`}>
                {menu.name}
              </p>
            </li>
          )
        })}
        {/* External Links */}
        {sideMenuOptionsExternal.map(menu => {
          return (
            <li
              key={menu.name}
              className="cursor-pointer flex justify-center p-6  hover:text-dark-blue"
            >
              <a href={menu.url} target="_blank">
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
