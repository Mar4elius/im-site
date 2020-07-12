// React
import React, { useState, useRef } from "react"
import useInterval from "../components/custom-hooks/useInterval"
// Components
import Layout from "../components/layout"
import Technologies from "../components/helper-components/technologies"
// Support
import sub from "date-fns/sub"

export default function Home({ location }) {
  // for some reason location.state on initial load of the page is empty
  const page = location.state?.activePage ?? "home"
  // Experience data
  const startDate = useRef(breakDate(new Date(2017, 10, 1))).current
  const [difDate, setDifDate] = useState(breakDate(new Date()))
  // Skills data
  const iconSize = "3x"
  const languages = [
    {
      name: "PHP",
      icon: {
        icon: ["fab", "php"],
        size: iconSize,
      },
    },
    {
      name: "Java Script",
      icon: {
        icon: ["fab", "js"],
        size: iconSize,
      },
    },
    {
      name: "SQL",
      icon: {
        icon: ["fas", "database"],
        size: iconSize,
      },
    },
  ]

  const frameworks = [
    {
      name: "Laravel",
      icon: {
        icon: ["fab", "laravel"],
        size: iconSize,
      },
    },
    {
      name: "Vue js",
      icon: {
        icon: ["fab", "vuejs"],
        size: iconSize,
      },
    },
    {
      name: "React js",
      icon: {
        icon: ["fab", "react"],
        size: iconSize,
      },
    },
  ]

  const others = [
    {
      name: "Sass",
      icon: {
        icon: ["fab", "sass"],
        size: iconSize,
      },
    },
    {
      name: "Git",
      icon: {
        icon: "code-branch",
        size: iconSize,
      },
    },
  ]

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
  return (
    <Layout page={page}>
      {/* Experience Counter */}
      <div className="flex justify-center bg-main h-64 items-center flex-wrap">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl">Full stack developer for</h1>
        </div>
        <div className="flex justify-center">
          <div className="text-2xl">
            <div className="experience-container">
              <span className="text-6xl">
                Years:{" "}
                <strong className="text-pink pr-5">{difDate.year}</strong>
              </span>
              <span className="text-5xl">
                Months:{" "}
                <strong className="text-pink pr-5">{difDate.month}</strong>
              </span>
              <span className="text-4xl">
                Days: <strong className="text-pink pr-5">{difDate.day}</strong>
              </span>
              <span className="text3xl">
                Hours:{" "}
                <strong className="text-pink pr-5">{difDate.hours}</strong>
              </span>
              <span className="text-2xl">
                Minutes:
                <strong className="text-pink pr-5">{difDate.minutes}</strong>
              </span>
              <span className="text-xl">
                Seconds:
                <strong className="text-pink">{difDate.seconds}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* What I know  */}
      <div className="flex justify-center w-full bg-main flex-grow flex-wrap">
        <div className="flex w-full justify-center items-center">
          <h1 className="text-3xl pb-6">What I know</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          <Technologies title="Languages">{languages}</Technologies>
          <Technologies title="Frameworks">{frameworks}</Technologies>
          <Technologies title="Others">{others}</Technologies>
        </div>
      </div>
    </Layout>
  )
}
