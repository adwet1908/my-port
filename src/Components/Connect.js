import React from 'react'
import '../index.css'
import Lottie from "react-lottie";
import animationData from "../lottie/connect-earth.json"
import LinkButton from './LinkButton'

export default function Connect() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div id="connect">
      <h1 style={{fontFamily:'Borel'}}>Connect me</h1>
      <div className="connect-links">
        <LinkButton url="https://www.instagram.com/adwetanur/" site="Instagram" />
        <LinkButton url="https://twitter.com/da_faq_wha_/" site="Twitter/X" />
        <LinkButton url="https://github.com/adwet1908/" site="Github" />
        <LinkButton url="https://www.linkedin.com/in/adwetanuragdash/" site="LinkedIn" />
      </div>

      <div className="animation-connect">
        <Lottie options={defaultOptions}  height={450} width={450} />
      </div>
    </div>
  )
}
