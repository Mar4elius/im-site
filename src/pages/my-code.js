import React from "react"
import Layout from "../components/layout"

import Project from "../components/helper-components/project"

export default function MyCode({ location }) {
  const page = location.state.activePage
  const projects = [
    {
      name: "Future Project",
      description: "Something meaningful about the project",
      link: "url",
      gitHub: "github",
      technologies: ["Laravel"],
    },
    {
      name: "Future Project",
      description: "Something meaningful about the project",
      link: "url",
      gitHub: "github",
      technologies: ["Laravel"],
    },
    {
      name: "Future Project",
      description: "Something meaningful about the project",
      link: "url",
      gitHub: "github",
      technologies: ["Laravel"],
    },
  ]
  return (
    <Layout page={page}>
      {/* <div className="w-full flex justify-center h-64">
        <p>Nothing here yet. :D </p>
        <p>I'm working on something to show something here.</p>
      </div> */}
      <div className="w-full flex justify-between">
        {projects.map(project => {
          return <Project project={project} />
        })}
      </div>
    </Layout>
  )
}
