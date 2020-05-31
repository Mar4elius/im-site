import React from "react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div>
      <Header quote="Hello">{children}</Header>
      <Sidebar>{children}</Sidebar>
    </div>
  )
}
