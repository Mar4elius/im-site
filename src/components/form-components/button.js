import React from "react"

export default function Button({ value, onClick }) {
  return (
    <div>
      <button
        type="button"
        className="py-2 px-4 rounded bg-pink"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}
