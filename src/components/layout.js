import React from "react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

export default function Layout({ page }) {
  // Header quotes
  const quotes = {
    home: "The path will be overcome by the person walking it.",
    myCode: "Talk is cheap. Show me the code.",
    aboutMe: "Good guy",
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
      </div>
    </div>
  )
}
