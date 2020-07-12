import React from "react"
import Layout from "../components/layout"

import Project from "../components/helper-components/project"

export default function MyCode({ location }) {
  const page = location.state.activePage
  const projects = [
    {
      name: "Future Project 1",
      description: "Something meaningful about the project",
      link: "url",
      gitHub: "github",
      technologies: ["faLaravel", "faVuejs"],
    },
    {
      name: "Future Project 2",
      description: "Something meaningful about the project",
      link: "url",
      gitHub: "github",
      technologies: ["faLaravel", "faReact"],
    },
    {
      name: "Future Project 3",
      description: "Something meaningful about the project",
      link: "url",
      gitHub: "github",
      technologies: [["fab", "faLaravel"]],
    },
  ]
  return (
    <Layout page={page}>
      <div className="w-full flex justify-between items-center">
        {projects.map(project => {
          return <Project project={project} key={project.name} />
        })}
      </div>
    </Layout>
  )
}
