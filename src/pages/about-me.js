import React from "react"
// Support
import Layout from "../components/layout"
import GoogleMaps from "../components/helper-components/google-maps"

export default function AboutMe({ location }) {
  const page = location.state.activePage
  return (
    <Layout page={page}>
      <GoogleMaps></GoogleMaps>
    </Layout>
  )
}
