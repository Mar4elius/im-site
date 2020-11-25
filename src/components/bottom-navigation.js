// React
import React from "react"
// Support
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Data
import sidebarJson from "../content/sidebarData.json"

export default function Sidebar() {
  return (
    <div
      className="visible fixed bottom-0 w-full sm:hidden sm:flex sm:min-h-screen bg-pink">
      <ul className="w-full flex justify-between">
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
              className="cursor-pointer flex justify-center p-6 hover:text-dark-blue"
              >
                <FontAwesomeIcon icon={menu.icon.icon} size={menu.icon.size} />
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}
