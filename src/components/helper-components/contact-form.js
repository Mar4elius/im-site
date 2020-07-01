import React, { useState, useEffect } from "react"
// Support
import axios from "axios"
import Button from "../form-components/button"

export default function ContactForm(props) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Formspree email send
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleOnSubmit = event => {
    event.preventDefault()
    if (!validate()) {
      return
    }
    setServerState({
      submitting: true,
    })
    axios({
      method: "POST",
      //   url: process.env.FORMSPREE_URL,
      url: `https://formspree.io/xjvaeygn`,
      data: inputs,
    })
      .then(_ => {
        handleServerResponse(true, "Great! Thank you for submitting an email.")
      })
      .catch(error => {
        //put data into log
        console.log(error)
        handleServerResponse(
          false,
          "Hmm, something went wrong. Please try again."
        )
      })
  }

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setFieldErrors({})
      setInputs({
        name: "",
        email: "",
        message: "",
      })
      setInfoMessage(msg)
    } else {
      setInfoMessage(msg)
    }
  }
  // \ Formspree email send

  // Validation
  const [fieldErrors, setFieldErrors] = useState({})

  const validationRules = {
    name: val => !!val,
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val, // similar to "required"
  }

  const handleOnChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const [infoMessage, setInfoMessage] = useState(null)
  let showMessage = _ => {
    if (infoMessage && serverState.status?.ok) {
      return (
        <div className="w-full bg-green-600 rounded p-2 opacity-75 flex justify-center mt-10">
          <p>{infoMessage}</p>
        </div>
      )
    } else if (infoMessage && !serverState.status?.ok) {
      return (
        <div className="w-full bg-red-600 rounded p-2 opacity-75 flex justify-center mt-10">
          <p>{infoMessage}</p>
        </div>
      )
    } else {
      return null
    }
  }

  const validate = () => {
    let errors = {}
    let hasErrors = false
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key])
      hasErrors |= errors[key]
    }
    setFieldErrors(prev => ({ ...prev, ...errors }))
    return !hasErrors
  }

  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <span className="text-red-600">Please enter a valid {field}.</span>
    }
  }

  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate()
    }
  }, [inputs])
  // \ validation

  function handleCancelClick() {
    props.onCancelClick()
  }

  return (
    <div id="contact-form">
      {showMessage()}
      <div className="w-full my-10 flex">
        <div className="w-1/2 flex-wrap">
          <div className="w-full flex">
            <label htmlFor="name" className="mr-4">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="border-2 border-black rounded flex-1 mr-4 p-1"
              required
              onChange={handleOnChange}
              value={inputs.name}
            />
          </div>
          <div className="flex justify-center ml-20 mt-2">
            {renderFieldError("name")}
          </div>
        </div>

        <div className="w-1/2 flex-wrap">
          <div className="w-full flex">
            <label htmlFor="email" className="mr-4">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border-2 border-black rounded flex-1 p-1"
              required
              onChange={handleOnChange}
              value={inputs.email}
            />
          </div>
          <div className="w-full flex justify-center ml-8 mt-2">
            {renderFieldError("email")}
          </div>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-wrap">
        <label htmlFor="message" className="mr-8">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="7"
          minLength="25"
          className="border-2 border-black rounded w-full p-2 my-2"
          required
          onChange={handleOnChange}
          value={inputs.message}
        />
        {renderFieldError("message")}
      </div>

      <div className="flex w-full justify-center m-8">
        <Button value="Send message" onClick={handleOnSubmit} />
        <Button value="Cancel" onClick={handleCancelClick} />
      </div>
    </div>
  )
}
