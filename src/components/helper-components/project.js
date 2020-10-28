import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

export default function Project(props) {
  const imgStyles = {
    width: 200,
    height: 100,
    padding: "0px 5px",
  }

  const wrapperStyles = {
    width: 200,
    height: 100,
  }

  const images = () => {
    if (props.images?.images.length) {
      return (
        <div className="flex justify-evenly w-full items-center">
          {props.images.images.map(i => (
            <span
              onClick={() => props.onImageClick(props.project.name)}
              className="cursor-pointer"
              key={i.node.id}
            >
              <Img
                fluid={i.node.fluid}
                style={wrapperStyles}
                imgStyle={imgStyles}
              />
            </span>
          ))}
        </div>
      )
    } else {
      return null
    }
  }
  return (
    <div className="w-full h-full">
      <div className="flex flex-col my-6">
        <div className="text-center">
          <h2 className="font-bold">{props.project.name}</h2>
          <p className="mt-6">Status: {props.project.status}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 h-full mx-10 flex flex-wrap">
        {images()}
        <div className="flex items-center w-full justify-center">
          <p className="mt-10">{props.project.description}</p>
        </div>

        <ul className="flex flex-1 items-end">
          {props.project.technologies.map(t => (
            <li className="px-2" key={t}>
              <FontAwesomeIcon icon={t} size="2x" />
            </li>
          ))}
        </ul>

        <div className="flex items-end">
        <a
            className="mr-2"
          href={props.project.github}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="2x"
            className="text-dark-blue"
          />
        </a>
        <a
          href={props.project.link}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={"link"}
            size="2x"
            className="text-dark-blue"
          />
        </a>
        </div>
      </div>
    </div>
  )
}
