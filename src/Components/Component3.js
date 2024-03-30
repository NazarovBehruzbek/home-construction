import React from "react";
import "./background.scss"
import logo from "./images/logo1.png"

function BackgroundPage (){
    return(
        <section>
        <div className="background">
            <div className="container">
                <div className="infos">
                    <img src={logo} alt="" className="back-logo"/>
                    <h2>Join Our Growing Commercial General Contractor Team</h2>
                    <p>
                        In the ever-changing construction industry, we’re proud to offer competitive benefits along with an education allowance to help employees continue to learn and develop.
                        We strive to foster a work environment where relationships are valued and every team member is treated with trust and respect.
                        We serve Greater Springfield, Missouri, and the Midwest as a general contractor for commercial construction projects.
                    </p>
                    <h3>LEARN MORE ABOUT CAREER OPPORTUNITIES</h3>
                </div>
            </div>
            <div className="back-fon"></div>

        </div>
        </section>
    )
}
export default BackgroundPage