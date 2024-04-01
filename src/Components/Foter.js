import React, { useState} from 'react';
import "./foter.scss"
import {Col, Form, Input, Row,message} from "antd";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {useTranslation} from "react-i18next";

function Foter(){
    const coordinate = [41.3383854, 69.2857248];
    const {t} = useTranslation()
    const onFinish = (event) => {
        event.preventDefault()
        const telegram_bot_id = "7127598664:AAEXfRivlYDlHmGpewNnggFY9DWvgfZZ25o";
        const chat_id = 6706091019;
        const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
        const method = 'POST';
        const name = document.getElementById("nameInput").value;
        const phone = document.getElementById("phoneInput").value;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            document.getElementById("myForm").reset();
            message.success(t('foter.succes'))
        }).catch(error => {
            message.error(t('foter.error'))
        });
    };

    return(
        <section>
            <div className="foter" id="connect">
                <div className="container">
                    <Row>
                        <Col lg={12} md={24} xs={24} sm={24}>
                            <div className="info">
                                <h2 className="foter-title">{t('foter.title')}</h2>
                                <div className="foter-glob">
                                    <div className="foter-adres">
                                        <div className="foter-icon">
                                            <FontAwesomeIcon icon={faLocationDot}/>
                                        </div>
                                        <div className="foter-info">
                                            <h2>{t('foter.addressT')}</h2>
                                            <p>{t('foter.address')}</p>
                                        </div>
                                    </div>

                                    <div className="foter-adres">
                                        <div className="foter-icon">
                                            <FontAwesomeIcon icon={faPhoneVolume}/>
                                        </div>
                                        <div className="foter-info">
                                            <h2>{t('foter.phone')}</h2>
                                            <p>+998908666051</p>
                                        </div>
                                    </div>

                                    <div className="foter-adres">
                                        <div className="foter-icon">
                                            <FontAwesomeIcon icon={faClock}/>
                                        </div>
                                        <div className="foter-info">
                                            <h2>{t('foter.work')}</h2>
                                            <p>09:00 - 18:00 Mon-Fri</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-network">
                                    <a href="https://t.me/Bexruzbek_Nazarov" target="_blank">
                                        <div><FontAwesomeIcon icon={faFacebookF}/></div>
                                    </a>
                                    <a href="https://www.instagram.com/nazarov_behruzbek" target="_blank">
                                        <div><FontAwesomeIcon icon={faInstagram}/></div>
                                    </a>
                                    <a href="https://t.me/Bexruzbek_Nazarov" target="_blank">
                                        <div><FontAwesomeIcon icon={faTelegram}/></div>
                                    </a>
                                </div>

                                <div className="foter-form">
                                    <form onSubmit={onFinish} id="myForm">
                                        <div className="foter-items">
                                            <div className="form-item">
                                                <p>{t('foter.formName')}</p>
                                                <input
                                                    id="nameInput"
                                                    type="text"
                                                    required
                                                    name="name"
                                                    placeholder={t('foter.formName')}
                                                />
                                            </div>
                                            <div className="form-item">
                                                <p>{t('foter.pnumber')}</p>
                                                <input
                                                    id="phoneInput"
                                                    type="text"
                                                    required
                                                    placeholder="+998908666051"
                                                />
                                            </div>
                                            <div className="form-item">
                                                <button type="submit">{t('foter.send')}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24} xs={24} sm={24}>

                            <YMaps>
                                <div className="map-container">
                                    <Map
                                        defaultState={{center: [41.3383854, 69.2857248], zoom: 16}}
                                        className="map"
                                    >
                                        <Placemark geometry={coordinate} options={{iconColor: '#F35825'}}/>
                                    </Map>
                                </div>
                            </YMaps>
                        </Col>
                    </Row>

                </div>
            </div>

        </section>
    )
}

export default Foter;