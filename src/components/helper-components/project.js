import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Project({ project }) {
  return (
    <div className="w-full">
      <h2 className="text-center my-12">{project.name}</h2>
      <div className="bg-white rounded-lg p-6 h-64 mx-12 flex flex-wrap grow">
        <div className="w-full">
          <p>{project.description}</p>
        </div>
        <ul className="flex flex-1 items-end">
          {project.technologies.map(t => (
            <li className="px-2" key={t}>
              <FontAwesomeIcon icon={t} size="2x" />
            </li>
          ))}
        </ul>

        <a className="flex items-end" href="www.imarchenko.com/index">
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
