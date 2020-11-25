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
        <div className="text-2xl md:text-2xl">
            <div className="md:flex md:items-baseline md:justify-around lg:w-full">
                <div className="grid grid-cols-2 gap-4 mx-3 text-2xl mb-5 md:flex md:justify-end md:text-3xl md:my-0 lg:text-5xl lg:w-1/3 lg:justify-center">
                    <p className="flex justify-end">Years:</p>
                    <p className="flex justify-center md:w-4">
                        <strong className="text-pink"> {difDate.year}</strong>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mx-3 text-2xl my-5 md:flex md:text-3xl md:my-0 lg:text-5xl lg:w-1/3 lg:justify-center">
                    <p className="flex justify-end">Months:</p>
                    <p className="flex justify-center md:w-4 md:ml-6 md:mr-10">
                    <strong className="text-pink"> {difDate.month}</strong>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mx-3 text-2xl my-5 md:flex md:my-0 md:text-3xl lg:text-5xl lg:w-1/3 lg:justify-center">
                    <p className="flex justify-end">Days:</p>
                    <p className="flex justify-center md:w-4">
                    <strong className="text-pink"> {difDate.day}</strong>
                    </p>
                </div>
          </div>
          <div className="md:flex md:items-baseline md:justify-around lg:w-full">
            <div className="grid grid-cols-2 gap-4 mx-3 text-xl my-5 md:flex md:my-0 md:text-2xl lg:text-3xl lg:w-1/3 lg:justify-center">
                <p className="flex justify-end md:pr-4">Hours:</p>
                <p className="flex justify-center md:w-4 md:mr-4">
                <strong className="text-pink"> {difDate.hours}</strong>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-3 text-lg my-5 md:flex  md:my-0 md:text-2xl lg:text-3xl lg:w-1/3 lg:justify-center">
                <p className="flex justify-end md:pr-4">Minutes:</p>
                <p className="flex justify-center md:w-4">
                <strong className="text-pink"> {difDate.minutes}</strong>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-3 text-md md:flex md:my-0 md:text-2xl lg:text-3xl lg:w-1/3 lg:justify-center">
                <p className="flex justify-end md:pr-4">Seconds:</p>
                <p className="flex justify-center md:w-4">
                <strong className="text-pink"> {difDate.seconds}</strong>
                </p>
            </div>
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
      <div className="flex justify-center bg-main items-center flex-wrap flex-grow">
        <div className="flex w-full justify-center items-center">
          <h1 className="my-5 text-2xl font-bold md:text-3xl md:my-0">Full stack developer for</h1>
        </div>
        <div className="w-full">{experience()}</div>
      </div>
      {/* What I know  */}
      <div className="flex justify-center w-full bg-main flex-wrap flex-grow">
        <div className="flex w-full justify-center items-center">
          <h1 className="my-5 text-2xl font-bold md:text-3xl md:my-0">What I know</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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
