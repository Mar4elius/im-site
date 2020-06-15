import React, { useState } from "react"

export default function ContactForm() {
  return (
    <div id="contact-form">
      <form
        id="contact-form"
        method="POST"
        action="https://formspree.io/imarchenko1@protonmail.com"
        className="w-full"
      >
        {/* use this to reply visitors and prevent spam via akismet */}
        <input type="email" name="email" />
        <div className="flex w-full my-10">
          <div className="w-1/2">
            <label htmlFor="name" className="mr-4">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              className="border-2 border-black rounded"
              required
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="email" className="mr-4">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-black rounded"
              required
            ></input>
          </div>
        </div>
        <div className="flex">
          <label htmlFor="message" className="mr-4">
            Message:
          </label>
          <textarea
            name="message"
            rows="7"
            minLength="25"
            className="border-2 border-black rounded w-full p-2"
            required
          ></textarea>
        </div>
        {/* use this to prevent spam */}
        <input type="hidden" name="_gotcha" />
      </form>

      {/* <div className="w-full">
            <div class="col-lg-4 text_left">
                    <p class="text-left">
                        <h5>Let's chat!</h5>
                        <i class="fas fa-phone"></i>&nbsp;{{.Site.Params.contacts.phone}}
                        <br>
                        <i class="fas fa-envelope-open"></i>&nbsp;{{ .Site.Params.contacts.email}}<br>
                        <h5 class="pt-2">Location</h5> 
                        <i class="fas fa-home"></i>&nbsp;{{ .Site.Params.contacts.address}}</p>
                        
                        <h4>Social</h4>
                        
                        <a target="_blank" href="{{.Site.Params.contacts.github}}">
                            <i class="fab fa-github-square fa-3x pr-2"></i>
                        </a>
                        <a target="_blank" href="{{.Site.Params.contacts.linkdIn}}">
                            <i class="fab fa-linkedin fa-3x"></i>
                        </a>
                </div>
            </div> */}
    </div>
  )
}
