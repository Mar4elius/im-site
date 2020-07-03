import React from "react"

export default function Project({ project }) {
  return (
    <div className="bg-white rounded-lg p-6 w-1/4 h-64 m-12">
      <h2>Working on it</h2>
      <p>{project.name}</p>
      {/* github link */}
      {/* what technology stuck is used */}
    </div>
  )
}
