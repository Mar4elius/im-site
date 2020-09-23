import React from "react"
import Sidebar from "../components/sidebar"
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
  faJs
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
  const activePage = page.split(" ").join("")
  // find object key and lowercase first char of activePage
  let activeQuote = Object.keys(quotes).find(
    name => name === activePage.charAt(0).toLowerCase() + activePage.slice(1)
  )

  return (
    <div className="flex bg-main">
      <Sidebar />
      <div className="flex flex-wrap flex-col w-full">
        <Header quote={quotes[activeQuote]} />
        {children}
      </div>
    </div>
  )
}
