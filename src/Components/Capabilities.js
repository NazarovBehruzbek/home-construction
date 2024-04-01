import React from "react";
import "./capability.scss"
import {Col, Row} from "antd";
import quality from "./images/Quality.svg"
import budget from "./images/Budget.svg"
import calendar from "./images/Calendar.svg"
import check from "./images/Checklist.svg"
import handshake from "./images/Handshake.svg"
import {useTranslation} from "react-i18next";

function Capabilities(){
    const {t} = useTranslation()
    return(
        <section>
            <div className="capability" id="capability">
                <div className="container">
                    <h2>{t('capability.title')}</h2>
                    <p className="cap-text">{t('capability.text')}</p>
                    <Row>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={quality} alt="error"/>
                                <h2>{t('capability.card1.title')}</h2>
                                <p>{t('capability.card1.text')}</p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={budget} alt="error"/>
                                <h2>{t('capability.card2.title')}</h2>
                                <p>{t('capability.card2.text')}</p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={calendar} alt="error"/>
                                <h2>{t('capability.card3.title')}</h2>
                                <p>{t('capability.card3.text')}</p>
                            </div>
                        </Col>

                        <Col lg={4} md={0}></Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={check} alt="error"/>
                                <h2>{t('capability.card4.title')}</h2>
                                <p>{t('capability.card4.text')}</p>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="cap-item">
                                <img src={handshake} alt="error"/>
                                <h2>{t('capability.card5.title')}</h2>
                                <p>{t('capability.card5.text')}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}
export default Capabilities;