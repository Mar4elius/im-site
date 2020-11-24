// React
import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
// Support
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Assets
import creatorPhoto from "../assets/images/creator_photo.jpg"
// Data
import sidebarJson from "../content/sidebarData.json"

export default function Sidebar() {
  //graphQL data
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            email
          }
        }
      }
    `
  )
  const [isFullSideBar, setFullSideBar] = useState(false)
  let isClicked = useRef(false)

  function handleArrowClick() {
    isClicked.current = !isClicked.current
    setFullSideBar(isClicked.current)
  }

  return (
    <div
      className={`hidden sm:flex sm:min-h-screen bg-pink
      ${isFullSideBar ? "sm:w-68 sm:transition-all sm:duration-300 sm:ease-linear" : "sm:w-24 sm:transition-all sm:duration-300 ease-linear"}`}
    >
      <ul className="w-24 align-middle">
        <li className="flex justify-center pt-10 pb-5">
          <img
            src={creatorPhoto}
            alt="creator"
            className="h-16 w-16 rounded-full"
          />
        </li>
        <li className={`${isFullSideBar ? "fade-in" : "fade-out invisible"}`}>
          <div className="flex pl-6 flex-column text-sm text-white">
            <span>
              {data.site.siteMetadata.author} {data.site.siteMetadata.email}
            </span>
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
        {sidebarJson.sideMenuOptionsInternal.map(menu => {
          return (
            <Link
            to={menu.url}
            activeClassName="text-dark-blue"
            state={{ activePage: menu.name }}
            key={menu.name}
            >
              <li
              className="cursor-pointer flex justify-center p-6  hover:text-dark-blue"
              >
                <FontAwesomeIcon icon={menu.icon.icon} size={menu.icon.size} />
                <p className={`${isFullSideBar ? "show-name" : "hide-name"}`}>
                  {menu.name}
                </p>
              </li>
            </Link>
          )
        })}
        {/* External Links */}
        {sidebarJson.sideMenuOptionsExternal.map(menu => {
          return (
            <li
              key={menu.name}
              className="cursor-pointer flex justify-center p-6  hover:text-dark-blue"
            >
              <a href={menu.url} target="_blank" rel="noreferrer">
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
