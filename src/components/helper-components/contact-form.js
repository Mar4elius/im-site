import React, { useState, useRef } from "react"
// Support
import axios from "axios"

export default function ContactForm({ isContactFormSubmitted }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleOnChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setInputs({
        email: "",
        message: "",
      })
    }
  }

  const [submitContactForm, setSubmitContactForm] = useState(true)

  const handleOnSubmit = _ => {
    setServerState({
      submitting: true,
    })
    axios({
      method: "POST",
      url: "https://formspree.io/mgenyjvy",
      data: inputs,
    })
      .then(response => {
        handleServerResponse(true, "Great! Thank you for submitting an email.")
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  if (isContactFormSubmitted && submitContactForm) {
    handleOnSubmit()
    setSubmitContactForm(false)
  }

  return (
    <div id="contact-form">
      <div className="flex my-10 flex-wrap">
        <div className="w-1/2 flex">
          <label htmlFor="name" className="mr-4">
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="border-2 border-black rounded flex-1 mr-4"
            required
            onChange={handleOnChange}
            value={inputs.name}
          />
        </div>

        <div className="w-1/2 flex">
          <label htmlFor="email" className="mr-4">
            Your Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="border-2 border-black rounded flex-1"
            required
            onChange={handleOnChange}
            value={inputs.email}
          />
        </div>
        <div className="mt-5 w-full flex">
          <label htmlFor="message" className="mr-8">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="7"
            minLength="25"
            className="border-2 border-black rounded w-full p-2"
            required
            onChange={handleOnChange}
            value={inputs.message}
          />
        </div>
      </div>
    </div>
  )
}
