import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Project({ project }) {
  //   const [dynamicIcon, setDynamicIcon] = useState(() => {
  //       return await project.technologies.map(t => impor  t {t} from '@fortawesome/free-brands-svg-icons')
  //   })

  const importedIconRef = useRef(null)

  useEffect(() => {
    const importIcon = async () => {
      try {
        import("@fortawesome/free-brands-svg-icons").then(icons => {
          importedIconRef.current = icons.faGithubAlt
        })
      } finally {
        console.log(importedIconRef)
      }
    }
  })

  return (
    <div className="w-full">
      <h2 className="text-center my-12">{project.name}</h2>
      <div className="bg-white rounded-lg p-6 h-64 mx-12 flex justify-between">
        <p>{project.description}</p>
        <ul className="flex">
          {/* {dynamicIcon.map(t => (
            <li className="px-2">
              <FontAwesomeIcon icon={t} size="2x" />
            </li>
          ))} */}
        </ul>

        <a>
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-dark-blue"
          />
        </a>
      </div>
    </div>
  )
}
