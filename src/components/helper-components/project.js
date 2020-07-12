import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Project({ project }) {
  return (
    <div className="w-full">
      <h2 className="text-center my-12">{project.name}</h2>
      <div className="bg-white rounded-lg p-6 h-64 mx-12 flex justify-between">
        <p>{project.description}</p>
        <ul className="flex">
          {project.technologies.map(t => (
            <li className="px-2">
              <FontAwesomeIcon icon={t} size="2x" />
            </li>
          ))}
        </ul>

        <a>
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="2x"
            className="text-dark-blue"
          />
        </a>
      </div>
    </div>
  )
}
