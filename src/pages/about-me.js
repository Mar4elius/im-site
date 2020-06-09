import React from "react"
// Support
import Layout from "../components/layout"
import GoogleMaps from "../components/helper-components/google-maps"

export default function AboutMe({ location }) {
  const page = location.state.activePage
  return (
    <Layout page={page}>
      <div className="flex justify-center flex-wrap">
        <div className="h-64 m-auto w-3/4 flex content-center flex-wrap">
          <h1>Hello!</h1>
          <p>Thank you for visiting my personal web site!</p>
          <p>
            I’m Igor. If you wondering how do I look like – check top left
            corner of the screen or visit my Linkedin page. :D Here I should say
            few words about myself... You could notice, that every page of this
            website has a header with some of my favourite quotes. I think these
            quotes describe me as a person (at least that what I think about
            myself :D).
          </p>
        </div>
        <GoogleMaps />
      </div>
    </Layout>
  )
}
