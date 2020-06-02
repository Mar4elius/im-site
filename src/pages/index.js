import React, { useState, useEffect, useMemo } from "react"
import Layout from "../components/layout"
import sub from "date-fns/sub"

export default function Home({ location }) {
  const page = location.state.activePage
  const startDate = useMemo(() => breakDate(new Date(2017, 10, 1)))
  const [difDate, setDifDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      console.log("ehllo")
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
  })

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
    </Layout>
  )
}
