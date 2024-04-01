import React from "react";
import {Col, Row} from "antd";
import commercial from "./images/commercial.jpeg";
import unisesdormitory from "./images/unisesdormitory.jpeg";
import multifamily from "./images/multifamily.jpg";
import university from "./images/insitutional.jpg";
import singlehouse from "./images/singlehouse.jpg";
import Marquee from "react-fast-marquee";
import "../Components/project.scss"
import {useTranslation} from "react-i18next";

function Component2() {
    const {t} = useTranslation()
    return (
        <section>
            <div className="projects">
                <div className="container">
                    <div className="project-info">
                        <h2 className="pro-title">{t('projects.title')}</h2>
                        <p className="text">
                            {t('projects.text')}
                        </p>
                    </div>
                    <Row>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <div className="project-item">
                                <img src={commercial} alt="Error" className="pro-img1"/>
                                <div className="pro-fon"></div>
                                <div className="message-info">
                                    <h3>{t('projects.project1.title')}</h3>
                                    <p>{t('projects.project1.text')}</p>
                                </div>

                            </div>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Row>
                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <div className="project-item">
                                        <img src={unisesdormitory} alt="Error" className="pro-img"/>
                                        <div className="pro-fon"></div>
                                        <div className="mes-info">
                                            <h3>{t('projects.project2.title1')}</h3>
                                            <p>{t('projects.project1.text')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <div className="project-item">
                                        <img src={multifamily} alt="Error" className="pro-img"/>
                                        <div className="pro-fon"></div>
                                        <div className="mes-info">
                                            <h3>{t('projects.project2.title2')}</h3>
                                            <p>{t('projects.project1.text')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <div className="project-item">
                                        <img src={university} alt="Error" className="pro-img"/>
                                        <div className="pro-fon"></div>
                                        <div className="mes-info">
                                            <h3>{t('projects.project2.title3')}</h3>
                                            <p>{t('projects.project1.text')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <div className="project-item">
                                        <img src={singlehouse} alt="Error" className="pro-img"/>
                                        <div className="pro-fon"></div>
                                        <div className="mes-info">
                                            <h3>{t('projects.project2.title4')}</h3>
                                            <p>{t('projects.project1.text')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>
            <div className="moving-text">
                <Marquee direction="right">
                    <div className="text-animate">
                        <div className="animate-item">Pre Construction</div>
                        <div className="animate-item1"></div>
                        <div className="animate-item">Construction management</div>
                        <div className="animate-item1"></div>
                        <div className="animate-item">House Build</div>
                        <div className="animate-item1"></div>
                    </div>
                </Marquee>
                <Marquee direction="left">
                    <div className="text-animate">
                        <div className="animate-item">Self construction</div>
                        <div className="animate-item1"></div>
                        <div className="animate-item">house building</div>
                        <div className="animate-item1"></div>
                        <div className="animate-item">self perform</div>
                        <div className="animate-item1"></div>
                    </div>
                </Marquee>
            </div>
        </section>
    )
}

export default Component2;