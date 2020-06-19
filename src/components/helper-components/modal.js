import React from "react"
// Components
import Button from "../form-components/button"

export default function ContactModal(props) {
  function handleConfirmClick() {
    props.onSubmitClick()
  }

  function handleCancelClick() {
    props.onCancelClick()
  }

  if (props.showModal) {
    return (
      // modal
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300 bg-opacity-75 z-10 full-width h-full flex items-center justify-center">
        {/* Modal content */}
        <div className="w-1/2 m-auto bg-white rounded-lg border-2 opacity-100">
          {/* Modal Header */}
          <div className="w-full">{props.header}</div>
          <div className="mb-8 mx-8">
            <p>{props.content}</p>
            {props.children}
          </div>
          <div className="flex w-full justify-center m-8">
            <Button value="Send message" onClick={handleConfirmClick} />
            <Button value="Cancel" onClick={handleCancelClick} />
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
