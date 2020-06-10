import React, { useState } from "react"
// Support
import Layout from "../components/layout"
import GoogleMaps from "../components/helper-components/google-maps"
import Button from "../components/form-components/button"
import Modal from "../components/helper-components/modal"

export default function AboutMe({ location }) {
  const page = location.state.activePage
  const [showModal, setShowModal] = useState(false)

  const modalText = `Want to get in touch with me? Be it to request more info about myself or my experience,
                    to ask for my resume, tips on how to solve your sudoku, random questions about the universe and the meaning of life,
                    or even if only for some nice cup of coffee here in stunning Edmonton... just feel free to drop me a line anytime.
                    I promise to reply A.S.A.P.`

  const handleClick = _ => displayModal()

  function displayModal() {
    setShowModal(!showModal)
  }
  return (
    <Layout page={page}>
      <div className="h-64 m-auto w-3/4 flex content-center flex-wrap">
        <h1>Hello!</h1>
        <p>Thank you for visiting my personal web site!</p>
        <p>
          I’m Igor. If you wondering how do I look like – check top left corner
          of the screen or visit my Linkedin page. :D Here I should say few
          words about myself... You could notice, that every page of this
          website has a header with some of my favourite quotes. I think these
          quotes describe me as a person (at least that what I think about
          myself :D).
        </p>
        <div className="flex justify-center w-full mt-10">
          <Button value="Contact Me" onClick={handleClick}></Button>
        </div>
      </div>
      <GoogleMaps />
      <Modal showModal={showModal} content={modalText} onClick={handleClick}>
        <form id="contact-form" method="POST" action="https://formspree.io">
          <div className="flex justify-center">
            <div className="w-1/2">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                name="name"
                required
                className="border-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email">Your Email:</label>
              <input type="email" name="email" required></input>
            </div>
          </div>
        </form>
      </Modal>
    </Layout>
  )
}
