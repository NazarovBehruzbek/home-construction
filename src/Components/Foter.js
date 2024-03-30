import React, {useEffect} from 'react';
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
import { YMaps, Map } from '@pbe/react-yandex-maps';
function Foter(){
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const telegram_bot_id = "7010723308:AAGwh3tmHS-uV-Fb-CR_TqHGniLsFGrALmw";
        const chat_id = -1002068078844;
        const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
        const method = 'POST';
        const name = values.username;
        const phone = values.phonenumber;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            // setShowModal(true)
            form.resetFields();
        }).catch(error => {
            message.error("Xatolik");
        });
    };

    useEffect(() => {
        const ymaps = window.ymaps;
        if (ymaps) {
            ymaps.ready(() => {
                const map = new ymaps.Map('map', {
                    center: [55.76, 37.64], // Moscow coordinates
                    zoom: 10,
                });
            });
        }
    }, []);
    return(
        <section>
            <div className="foter">
                    <Row>
                        <Col lg={12} >
                            <div className="info">
                                <div className="foter-container">
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
                                        <div className="foter-items">
                                            <div className="form-item">
                                                <p>Ismingiz</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-item">
                                                <p>Telefon raqam</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-item">
                                               <button>Yuborish</button>
                                            </div>
                                        </div>
                                        {/*<Form*/}
                                        {/*    form={form}*/}
                                        {/*    name="basic"*/}
                                        {/*    onFinish={onFinish}*/}
                                        {/*    autoComplete="off"*/}
                                        {/*    footer={null}*/}
                                        {/*    layout="inline"*/}
                                        {/*>*/}
                                        {/*    <Form.Item*/}
                                        {/*        name="username"*/}

                                        {/*        rules={[*/}
                                        {/*            {*/}
                                        {/*                required: true,*/}
                                        {/*                message: 'sada'*/}
                                        {/*            },*/}
                                        {/*        ]}*/}
                                        {/*    >*/}
                                        {/*        <Input placeholder='asd'*/}
                                        {/*               style={{height: '50px', backgroundColor: '#F2F2F2'}}/>*/}
                                        {/*    </Form.Item>*/}

                                        {/*    <Form.Item*/}
                                        {/*        name="phonenumber"*/}
                                        {/*        rules={[*/}
                                        {/*            {*/}
                                        {/*                required: true,*/}
                                        {/*                message: 'asd',*/}
                                        {/*            },*/}
                                        {/*            {*/}
                                        {/*                pattern: /^(\+\d{1,3})?(\d{10})$/,*/}
                                        {/*                message: 'asda',*/}
                                        {/*            },*/}
                                        {/*        ]}*/}
                                        {/*    >*/}
                                        {/*        <Input placeholder="+998-90-866-60-51"*/}
                                        {/*               style={{height: '50px', backgroundColor: '#F2F2F2'}}/>*/}
                                        {/*    </Form.Item>*/}

                                        {/*    <Form.Item>*/}
                                        {/*        <button className="page4-btn" type="primary" htmlType="submit">*/}
                                        {/*            */}
                                        {/*        </button>*/}
                                        {/*    </Form.Item>*/}
                                        {/*</Form>*/}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <YMaps>
                                <div>
                                    <Map />
                                </div>
                            </YMaps>
                        </Col>
                    </Row>

            </div>

        </section>
    )
}

export default Foter;