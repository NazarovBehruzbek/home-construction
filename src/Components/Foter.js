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
function Foter(){
    const coordinate = [41.3383854, 69.2857248];

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
            message.success("Muvaffaqiyatli yuborildi")
        }).catch(error => {
            message.error("Xatolik");
        });
    };

    return(
        <section>
            <div className="foter">
                <div className="container">
                    <Row>
                        <Col lg={12} md={24} xs={24} sm={24}>
                            <div className="info">
                                    <h2 className="foter-title">Bog'lanish</h2>
                                    <div className="foter-glob">
                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faLocationDot}/>
                                            </div>
                                            <div className="foter-info">
                                                <h2>Manzil</h2>
                                                <p>Узбекистан, Ташкент, Национальный парк Узбекистана имени Алишера
                                                    Навои</p>
                                            </div>
                                        </div>

                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faPhoneVolume}/>
                                            </div>
                                            <div className="foter-info">
                                                <h2>Telefon</h2>
                                                <p>+998908666051</p>
                                            </div>
                                        </div>

                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faClock}/>
                                            </div>
                                            <div className="foter-info">
                                                <h2>Ish vaqti</h2>
                                                <p>09:00 - 18:00 ПН-СБ</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="social-network">
                                        <div><FontAwesomeIcon icon={faFacebookF}/></div>
                                        <div><FontAwesomeIcon icon={faInstagram}/></div>
                                        <div><FontAwesomeIcon icon={faTelegram}/></div>
                                    </div>
                                    <div className="foter-form">
                                        <form onSubmit={onFinish} id="myForm">
                                            <div className="foter-items">
                                                <div className="form-item">
                                                    <p>Ismingiz</p>
                                                    <input
                                                        id="nameInput"
                                                        type="text"
                                                        required
                                                        name="name"
                                                        placeholder="Ismingizni kiriting"
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <p>Telefon raqam</p>
                                                    <input
                                                        id="phoneInput"
                                                        type="text"
                                                        required
                                                        placeholder="+998908666051"
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <button type="submit">Yuborish</button>
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