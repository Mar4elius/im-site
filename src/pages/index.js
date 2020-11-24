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
  const startDate = useRef(breakDate(new Date(2018, 9, 15))).current
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
    // console.log(difference);
    setDifDate(difference)
  }, 1000)

  function breakDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    }
  }

  const experience = () => {
    if (difDate) {
      return (
        <div className="text-2xl sm:text-2xl w-full sm:flex sm:items-baseline sm:justify-around">
          <div className="grid grid-cols-2 gap-4 mx-3 text-4xl mb-5 sm:flex sm:text-6xl sm:my-0">
            <p className="flex justify-end sm:pr-4">Years:</p>
            <div className="flex justify-center sm:w-4">
              <strong className="text-pink"> {difDate.year}</strong>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-3 text-3xl my-5 sm:flex sm:text-5xl sm:my-0">
            <p className="flex justify-end sm:pr-4">Months:</p>
            <p className="flex justify-center sm:w-4 sm:ml-6 sm:mr-10">
              <strong className="text-pink"> {difDate.month}</strong>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-3 text-2xl my-5 flex sm:my-0">
            <p className="flex justify-end sm:pr-4">Days:</p>
            <p className="flex justify-center sm:w-4">
              <strong className="text-pink"> {difDate.day}</strong>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-3 text-xl my-5 sm:text-3xl flex sm:my-0">
            <p className="flex justify-end sm:pr-4">Hours:</p>
            <p className="flex justify-center sm:w-4 sm:mr-4">
              <strong className="text-pink"> {difDate.hours}</strong>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-3 text-lg my-5 flex sm:text-2xl sm:my-0">
            <p className="flex justify-end sm:pr-4">Minutes:</p>
            <p className="flex justify-center sm:w-4">
              <strong className="text-pink"> {difDate.minutes}</strong>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-3 text-md flex sm:text-xl sm:my-0">
            <p className="flex justify-end sm:pr-4">Seconds:</p>
            <p className="flex justify-center sm:w-4">
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
      <div className="flex justify-center bg-main items-center flex-wrap sm:h-64">
        <div className="flex justify-center w-full">
          <h1 className="my-5 text-2xl font-bold sm:text-3xl sm:my-0">Full stack developer for</h1>
        </div>
        <div className="w-full">{experience()}</div>
      </div>
      {/* What I know  */}
      <div className="flex justify-center w-full bg-main flex-grow flex-wrap">
        <div className="flex w-full justify-center items-center">
          <h1 className="my-5 text-2xl font-bold sm:text-3xl sm:my-0">What I know</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
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
