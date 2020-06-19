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
      <div className="flex w-full my-10">
        <div className="w-1/2">
          <label htmlFor="name" className="mr-4">
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="border-2 border-black rounded"
            required
            onChange={handleOnChange}
            value={inputs.name}
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="email" className="mr-4">
            Your Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="border-2 border-black rounded"
            required
            onChange={handleOnChange}
            value={inputs.email}
          />
        </div>
      </div>
      <label htmlFor="message" className="mr-4">
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

      {/* <div className="w-full">
            <div class="col-lg-4 text_left">
                    <p class="text-left">
                        <h5>Let's chat!</h5>
                        <i class="fas fa-phone"></i>&nbsp;{{.Site.Params.contacts.phone}}
                        <br>
                        <i class="fas fa-envelope-open"></i>&nbsp;{{ .Site.Params.contacts.email}}<br>
                        <h5 class="pt-2">Location</h5> 
                        <i class="fas fa-home"></i>&nbsp;{{ .Site.Params.contacts.address}}</p>
                        
                        <h4>Social</h4>
                        
                        <a target="_blank" href="{{.Site.Params.contacts.github}}">
                            <i class="fab fa-github-square fa-3x pr-2"></i>
                        </a>
                        <a target="_blank" href="{{.Site.Params.contacts.linkdIn}}">
                            <i class="fab fa-linkedin fa-3x"></i>
                        </a>
                </div>
            </div> */}
    </div>
  )
}
