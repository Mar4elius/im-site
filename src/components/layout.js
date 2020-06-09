import React from "react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

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
