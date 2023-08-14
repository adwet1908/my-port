import React from 'react';
import Lottie from "react-lottie";
import animationData from "../lottie/study-student.json"
import '../index.css'

export default function Intro() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <div className="names"><h1>Hi! I am Adwet Anurag Dash</h1>
                <h2 style={{ fontFamily: 'Borel' }}>Programmer and UI/UX designer</h2>
            </div>

            <div className="animation-container">
                <Lottie options={defaultOptions} height={550} width={550} />
            </div>
        </div>

    )
}
