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
        <div className="flex  justify-evenly w-full items-center md:flex-row">
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
    <div className="w-full lg:w-1/2 xl:w-1/3 lg:mb-32">
        <div className="text-center my-6">
          <h2 className="font-bold">{props.project.name}</h2>
          <p className="mt-6">Status: {props.project.status}</p>
      </div>
      <div className="m-4 bg-white rounded-lg p-6 lg:h-full lg:flex lg:flex-wrap lg:mx-5">
        {images()}
        <div className="mt-5 h-48 flex items-center w-full justify-center">
          <p className="lg:mt-10">{props.project.description}</p>
        </div>

        <ul className="flex justify-between items-end mt-5 w-full">
            <div className="flex">
                {props.project.technologies.map(t => (
                    <li className="px-2" key={t}>
                    <FontAwesomeIcon icon={t} size="2x" />
                    </li>
                ))}
          </div>
          <div className="flex">
            <li>
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
            </li>
            <li className="flex items-end">
                <a
                href={props.project.link}
                target="_blank"
                className={props.project.link ? `py-2 px-4 mx-2 rounded bg-pink hover:text-white hover:bg-dark-blue` : `py-2 px-4 mx-2 rounded bg-pink pointer-events-none` }>
                    Check it
                </a>
            </li>
            </div>
        </ul>
      </div>
    </div>
  )
}
