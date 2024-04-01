import React from "react";
import "./whoweare.scss"
import {Col, Row} from "antd";
import whoimg1 from "./images/who-img1.jpg"
import whoimg2 from "./images/who-img2.jpg"
import whoimg3 from "./images/who-img3.jpg"
import {useTranslation} from "react-i18next";

function Component4(){
    const {t} = useTranslation()
    return(
        <section>
            <div className="who-back">
                <Row>
                    <Col lg={12} md={24}  xs={24}>
                        <div className="who-info">
                            <div className="container">
                                <h2 className="who-title">{t('about.title')}</h2>
                                <div className="stick"></div>
                                <h2 className="sub-title">{t('about.text')}</h2>
                                <p className="sub-text">{t('about.subText')}</p>
                                <h3 className="sub-partner">{t('about.more')}</h3>
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