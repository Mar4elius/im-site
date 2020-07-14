import React from "react"
import Layout from "../components/layout"

import Project from "../components/helper-components/project"

export default function MyCode({ location }) {
  const page = location.state?.activePage ?? "my-code"
  const projects = [
    {
      name: "Future Project 1",
      description: "Working on it",
      link: "url",
      gitHub: "github",
      technologies: [["fab", "laravel"], ["fab", "vuejs"], "database"],
      key: getRandomKey(),
    },
    {
      name: "Future Project 2",
      description: "Working on it",
      link: "url",
      gitHub: "github",
      technologies: [["fab", "laravel"], ["fab", "react"], "database"],
      key: getRandomKey(),
    },
    {
      name: "Future Project 3",
      description: "Working on it",
      link: "url",
      gitHub: "github",
      technologies: [["fab", "laravel"]],
      key: getRandomKey(),
    },
  ]

  function getRandomKey() {
    return Math.floor(Math.random() * 90000) + 10000
  }

  return (
    <Layout page={page}>
      <div className="w-full h-32 flex items-center justify-center">
        <h2>Nothing to check here yet. :( But I'm working on it. :D</h2>
      </div>
      <div className="flex justify-between items-center">
        {projects.map(project => {
          return <Project project={project} key={project.key} />
        })}
      </div>
    </Layout>
  )
}
