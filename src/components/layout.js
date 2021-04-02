import React from "react"
import Sidebar from "../components/sidebar"
import BottomNavigation from "../components/bottom-navigation"
import Header from "../components/header"

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faHome,
  faLaptopCode,
  faAddressCard,
  faArrowRight,
  faArrowLeft,
  faDatabase,
  faAddressBook,
  faSpinner,
  faEnvelopeOpen,
  faPhone,
  faCodeBranch,
  faServer,
  faLink,
} from "@fortawesome/free-solid-svg-icons"

import {
  faGithub,
  faLinkedin,
  faSass,
  faPhp,
  faReact,
  faVuejs,
  faLaravel,
  faJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faHome,
  faLaptopCode,
  faAddressCard,
  faArrowRight,
  faArrowLeft,
  faDatabase,
  faAddressBook,
  faSpinner,
  faEnvelopeOpen,
  faPhone,
  faCodeBranch,
  faServer,
  // brands
  faGithub,
  faLinkedin,
  faSass,
  faPhp,
  faReact,
  faVuejs,
  faLaravel,
  faJs,
  faLink,
  faDocker
)

export default function Layout({ page, children }) {
  // Header quotes
  const quotes = {
    home: "The path will be overcome by the person walking it.",
    myCode: "Talk is cheap. Show me the code.",
    aboutMe:
      "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
  }
  // some page name come like 2 words
  const activePage = page.split(" ")
  let activeQuote = null
  // find object key and lowercase first char of activePage
  if (activePage.length > 1) {
    const camelName =
      activePage[0].charAt(0).toLowerCase() +
      activePage[0].slice(1) +
      activePage[1].charAt(0).toUpperCase() +
      activePage[1].slice(1)
    activeQuote = Object.keys(quotes).find(name => name === camelName)
  } else {
    activeQuote = Object.keys(quotes).find(
      name =>
        name === activePage[0].charAt(0).toLowerCase() + activePage[0].slice(1)
    )
  }

  return (
    <div className="flex bg-main">
      <Sidebar />
      <div className="flex flex-wrap flex-col w-full">
        <Header quote={quotes[activeQuote]} />
        {children}
        {/* show bottom nav only on sm screens */}
        <BottomNavigation />
      </div>
    </div>
  )
}
