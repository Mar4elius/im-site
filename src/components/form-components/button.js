import React from "react"

export default function Button({ value, onClick }) {
  return (
    <div>
      <button
        type="button"
        className="py-2 px-4 mx-8 rounded bg-pink hover:text-white hover:bg-dark-blue"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}
