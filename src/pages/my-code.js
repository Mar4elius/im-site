import React from "react"
// Components
import Layout from "../components/layout"
import Project from "../components/helper-components/project"
// Data
import projectsJson from "../content/projects.json"

export default function MyCode({ location, data }) {
  const page = location.state?.activePage ?? "my-code"

  function getRandomKey() {
    return Math.floor(Math.random() * 90000) + 10000
  }

  return (
    <Layout page={page}>
      <div className="w-full h-32 flex items-center justify-center"></div>
      <div className="flex justify-between items-center">
        {projectsJson.projects.map(project => {
          return <Project project={project} key={getRandomKey()} />
        })}
      </div>
    </Layout>
  )
}
