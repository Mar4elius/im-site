import React from "react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div className="flex bg-main">
      <Sidebar>{children}</Sidebar>
      <div className="flex flex-wrap flex-col w-full">
        <Header quote="Hello">{children}</Header>
      </div>
    </div>
  )
}
