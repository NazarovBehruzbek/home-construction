import React from "react";
import "./capability.scss"
import {Col, Row} from "antd";
import quality from "./images/Quality.svg"
import budget from "./images/Budget.svg"
import calendar from "./images/Calendar.svg"
import check from "./images/Checklist.svg"
import handshake from "./images/Handshake.svg"

function Capabilities(){
    return(
        <section>
            <div className="capability">
                <div className="container">
                    <h2>The Snyder Philosophy</h2>
                    <p className="cap-text">As a construction partner, we believe that a knowledgeable, healthy,
                        and engaged team will deliver a superior end-product for our clients who put their trust in us.</p>
                    <Row>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={quality} alt="error"/>
                                <h2>HIGH QUALITY</h2>
                                <p>We’ve worked hard to earn and maintain our reputation for quality work, and we’ve enjoyed ongoing relationships
                                    with repeat clients as a result. With our team of skilled and experienced personnel,
                                    plus our prequalified trade partners and suppliers, each project is held to the highest standards.</p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={budget} alt="error"/>
                                <h2>ON BUDGET</h2>
                                <p>
                                    Our unrivaled preconstruction services, combined with our years of experience as a
                                    Springfield-based general contractor, ensure each project begins with a budget that is accurate, comprehensive, and complete.
                                    We remain committed to staying on budget throughout the design and construction process.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={calendar} alt="error"/>
                                <h2>ON SCHEDULE</h2>
                                <p>
                                    Completing projects on or ahead of schedule is our standard, one that we’re able to maintain through communication and clarity at every stage, for every stakeholder.
                                    With our weekly meetings and look-ahead schedules, we make sure each project stays on track as a general contractor in
                                    Springfield, Missouri.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} md={0}></Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={check} alt="error"/>
                                <h2>COMMITTED TO SAFETY</h2>
                                <p>Safety is a priority for us, because it’s good for business and it’s also the right thing to do. All employees
                                    and trade partners abide by an extensive safety plan. Safety remains a priority throughout a project with weekly meetings and documented daily
                                    inspections as a general contractor in Springfield, Missouri.</p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={handshake} alt="error"/>
                                <h2>RELATIONSHIP FOCUSED</h2>
                                <p>
                                    Relationships are the cornerstone of our business. The quality of our work, low turnover, and high rate of return customers are all
                                    a reflection of how we value and respect our employees, trade partners, design consultants, and clients as a
                                    general contractor in Springfield.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}
export default Capabilities;