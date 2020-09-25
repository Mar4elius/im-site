import React, { useRef, useEffect } from "react"

export default function GoogleMaps() {
  const googleMapRef = useRef().current

  const center = {
    lat: 53.5335,
    lng: -113.5066,
  }

  useEffect(() => {
    if (!window.google) {
      let s = document.createElement("script")
      s.type = "text/javascript"
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.GOOGLE_MAP_API}`
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
    const map = new window.google.maps.Map(
      document.getElementById("google-map"),
      {
        zoom: 9,
        center: center,
        disableDefaultUI: true,
      }
    )
    const marker = new window.google.maps.Marker({
      position: center,
      title: "Hello!",
    })
    marker.setMap(map)
  }

  return <div id="google-map" ref={googleMapRef} className="w-full h-64"></div>
}
