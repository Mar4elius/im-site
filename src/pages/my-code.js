import React, { useState } from "react"
// Components
import Layout from "../components/layout"
import Project from "../components/helper-components/project"
import Modal from "../components/helper-components/modal"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Data
import projectsJson from "../content/projects.json"
// Graph QL
import { graphql } from "gatsby" // to query for image data

export default function MyCode({ location, data }) {
  const page = location.state?.activePage ?? "my-code"
  const [showModal, setShowModal] = useState(false)

  const [activeImages, setActiveImages] = useState(null)
  const [activeNodeImageId, setActiveNodeImageId] = useState(null)

  const projectsImages = [
    {
      appName: "Movie App",
      images: data.movieAppImages.edges,
    },
  ]

  function getRandomKey() {
    return Math.floor(Math.random() * 90000) + 10000
  }

  function showBigImage(projectName) {
    setActiveImages(projectsImages.find(p => p.appName === projectName))
    setActiveNodeImageId(
      projectsImages.find(p => p.appName === projectName)?.images[0].node.id
    )
    setShowModal(true)
  }

  function handleCancelClick() {
    setShowModal(false)
  }

  function showNextImage() {
    // const lastImageId =
    //   activeImages.images[activeImages.images.length - 1].node.id
    //   if (lastImageId !== activeNodeImageId) {
    //       setActiveNodeImageId()
    //   }
  }

  function showPreviousImage() {
    console.log("previous")
  }

  return (
    <Layout page={page}>
      <div className="w-full h-32 flex items-center justify-center"></div>
      <div className="flex justify-between items-center">
        {projectsJson.projects.map(project => {
          return (
            <Project
              project={project}
              key={getRandomKey()}
              images={projectsImages.find(p => p.appName === project.name)}
              onImageClick={showBigImage}
            />
          )
        })}
      </div>
      <Modal
        showModal={showModal}
        header={activeImages?.appName}
        content={""}
        onCancelClick={handleCancelClick}
      >
        <div className="flex justify-between w-full items-center">
          <FontAwesomeIcon
            icon="arrow-left"
            size="2x"
            onClick={() => showPreviousImage()}
            className="hover:text-dark-blue"
          />
          <div className="w-full">
            {activeImages?.images.map(i => {
              return (
                <Img
                  fluid={i.node.fluid}
                  key={i.node.id}
                  style={
                    activeNodeImageId === i.node.id ? { display: "none" } : ""
                  }
                />
              )
            })}
          </div>
          <FontAwesomeIcon
            icon="arrow-right"
            size="2x"
            onClick={() => showNextImage()}
            className="hover:text-dark-blue"
          />
        </div>
      </Modal>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MovieAppImageQuery {
    movieAppImages: allImageSharp(
      filter: { fluid: { src: { regex: "/movie-app/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1240) {
            src
            srcSet
            base64
            aspectRatio
            originalImg
            sizes
          }
        }
      }
    }
  }
`
