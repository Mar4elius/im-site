// React
import React from "react"
// Support
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Technologies(props) {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h3 className="font-bold">{props.title}</h3>
      </div>
      <div className="flex justify-center">
        <ul>
          {props.children.map(skill => {
            return (
              <li
                key={skill.name}
                className="grid grid-cols-2 my-5 flex items-center"
              >
                <FontAwesomeIcon
                  icon={skill.icon.icon}
                  size={skill.icon.size}
                />
                <span>{skill.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
