// React
import React, { useState, useRef } from "react"
import useInterval from "../components/custom-hooks/useInterval"
// Components
import Layout from "../components/layout"
import Technologies from "../components/helper-components/technologies"
// Support
import sub from "date-fns/sub"
// Data
import skillsJson from "../content/technologies.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home({ location }) {
  // for some reason location.state on initial load of the page is empty
  const page = location.state?.activePage ?? "Home"
  // Experience data
  const startDate = useRef(breakDate(new Date(2018, 10, 15))).current
  const [difDate, setDifDate] = useState(null)

  useInterval(() => {
    let difference = breakDate(
      sub(new Date(), {
        years: startDate.year,
        months: startDate.month,
        weeks: 0,
        days: startDate.day,
        hours: startDate.hours,
        minutes: startDate.minutes,
        seconds: startDate.seconds,
      })
    )
    setDifDate(difference)
  }, 1000)

  function breakDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    }
  }

  const experience = () => {
    if (difDate) {
      return (
        <div className="text-2xl experience-container flex items-baseline justify-between">
          <div className="text-6xl flex">
            <p className="pr-4">Years:</p>
            <p className="w-4">
              <strong className="text-pink"> {difDate.year}</strong>
            </p>
          </div>
          <div className="text-5xl flex">
            <p className="pr-">Months:</p>
            <p className="w-4 ml-6 mr-10">
              <strong className="text-pink"> {difDate.month}</strong>
            </p>
          </div>
          <div className="text-4xl flex">
            <p className="pr-4">Days:</p>
            <p className="w-4">
              <strong className="text-pink"> {difDate.day}</strong>
            </p>
          </div>
          <div className="text3xl flex">
            <p className="pr-4">Hours:</p>
            <p className="w-4 mr-4">
              <strong className="text-pink"> {difDate.hours}</strong>
            </p>
          </div>
          <div className="text-2xl flex">
            <p className="pr-4">Minutes:</p>
            <p className="w-4">
              <strong className="text-pink"> {difDate.minutes}</strong>
            </p>
          </div>
          <div className="text-xl flex">
            <p className="pr-4">Seconds:</p>
            <p className="w-4">
              <strong className="text-pink"> {difDate.seconds}</strong>
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="w-full flex justify-center">
          <FontAwesomeIcon
            icon="spinner"
            size="3x"
            className="text-dark-blue"
            spin
          />
        </div>
      )
    }
  }
  return (
    <Layout page={page}>
      {/* Experience Counter */}
      <div className="flex justify-center bg-main h-64 items-center flex-wrap">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl">Full stack developer for</h1>
        </div>
        <div className="flex justify-center">{experience()}</div>
      </div>
      {/* What I know  */}
      <div className="flex justify-center w-full bg-main flex-grow flex-wrap">
        <div className="flex w-full justify-center items-center">
          <h1 className="text-3xl pb-6">What I know</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          <Technologies title="Languages">{skillsJson.languages}</Technologies>
          <Technologies title="Frameworks">
            {skillsJson.frameworks}
          </Technologies>
          <Technologies title="Others">{skillsJson.others}</Technologies>
        </div>
      </div>
    </Layout>
  )
}
