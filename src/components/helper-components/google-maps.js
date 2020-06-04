import React, { useRef, useEffect, useState } from "react"

export default function GoogleMaps() {
  const googleMapRef = useRef().current
  //   const [googleScript, loadScript] = useState(initMap())

  useEffect(() => {
    if (!window.google) {
      let s = document.createElement("script")
      s.type = "text/javascript"
      s.src = `https://maps.google.com/maps/api/js?key=YOUR_API_KEY`
      let x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
      s.addEventListener("load", e => {
        initMap()
      })
    } else {
      initMap()
    }
  })

  function initMap() {
    new window.google.maps.Map(document.getElementById("google-map"), {
      zoom: 16,
      center: {
        lat: 43.6425,
        lng: -79.387,
      },
      disableDefaultUI: true,
    })
  }

  return <div id="google-map" ref={googleMapRef} className="w-full h-64"></div>
}
