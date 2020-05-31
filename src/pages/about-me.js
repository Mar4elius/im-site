import React from "react"
import Layout from "../components/layout"

export default function AboutMe({ location }) {
  const page = location.state.activePage
  return <Layout page={page} />
}
