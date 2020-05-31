import React from "react"

export default function Header(props) {
  return (
    <div className="flex justify-center w-full hover-color items-center h-32 text-white">
      <p className="text-3xl">{props.quote}</p>
    </div>
  )
}
