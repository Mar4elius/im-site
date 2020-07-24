import React, { useState } from "react"
// Components
import Layout from "../components/layout"
import GoogleMaps from "../components/helper-components/google-maps"
import Button from "../components/form-components/button"
import Modal from "../components/helper-components/modal"
import ContactForm from "../components/helper-components/contact-form"
// Data
import { graphql } from "gatsby"
import aboutMe from "../content/aboutMe.json"
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AboutMe({ location, data }) {
  console.log(aboutMe)
  const page = location.state?.activePage ?? "about-me"
  const [showModal, setShowModal] = useState(false)

  const modalHeader = (
    <div className="flex">
      <h1 className="my-8 ml-8 font-bold">Let's Chat!</h1>
      <ul className="m-8 flex">
        {aboutMe.data.map(icon => {
          return (
            <li className="text-dark-blue flex" key={icon.value}>
              <span className="mx-3">
                <FontAwesomeIcon icon={icon.icon} size={icon.size} />
              </span>
              <p>{icon.value}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const modalText = (
    <div className="w-full">
      <p>
        Want to get in touch with me? Be it to request more info about myself or
        my experience, to ask for my resume, tips on how to solve your sudoku,
        random questions about the universe and the meaning of life, or even if
        only for some nice cup of coffee here in stunning Edmonton... just feel
        free to drop me a line anytime.
      </p>
      <p className="mt-8">I promise to reply A.S.A.P.</p>
    </div>
  )

  function handleOnClick() {
    setShowModal(true)
  }

  function handleCancelClick() {
    setShowModal(false)
  }

  return (
    <Layout page={page}>
      <div className="h-64 m-auto w-3/4 flex content-center flex-wrap">
        {data.allMarkdownRemark.edges[0].node.rawMarkdownBody}
        <div className="flex justify-center w-full mt-10">
          <Button value="Contact Me" onClick={handleOnClick}></Button>
        </div>
      </div>
      <GoogleMaps />
      <Modal
        showModal={showModal}
        header={modalHeader}
        content={modalText}
        onCancelClick={handleCancelClick}
      >
        <ContactForm onCancelClick={handleCancelClick} />
      </Modal>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          rawMarkdownBody
        }
      }
    }
  }
`
