import React from "react";
import "./whoweare.scss"
import {Col, Row} from "antd";
import whoimg1 from "./images/who-img1.jpg"
import whoimg2 from "./images/who-img2.jpg"
import whoimg3 from "./images/who-img3.jpg"

function Component4(){
    return(
        <section>
            <div className="who-back">
                <Row>
                    <Col lg={12} md={24}  xs={24}>
                        <div className="who-info">
                            <div className="container">
                                <h2 className="who-title">WHO WE ARE</h2>
                                <div className="stick"></div>
                                <h2 className="sub-title">The largest house building and repair leader in
                                    Uzbekistan</h2>
                                <p className="sub-text">
                                    At HouseBuild we specialize in retrofit construction insulation and acoustic
                                    ceilings for commercial and residential projects.
                                    For 30 years we have prided ourselves on high quality workmanship at competitive
                                    prices while meeting strict deadlines.
                                </p>
                                <h3 className="sub-partner">
                                    Learn more
                                </h3>

                            </div>
                        </div>

                    </Col>
                    <Col lg={12} md={24}  xs={24}>
                        <div className="who-images">
                            <div className="who-img1">
                                <img src={whoimg1} alt="Error"/>
                            </div>
                            <div className="who-img2">
                                <img src={whoimg2} alt="Error"/>
                            </div>
                            <div className="who-img3">
                                <img src={whoimg3} alt="Error"/>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>

        </section>
    )
}

export default Component4;