import React, { useEffect, useState } from 'react';
import logo from "./images/logo.png"
import video from "./images/video.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Drawer, Select, Button, Modal, Form, Input, message } from "antd";
import { useTranslation } from "react-i18next";
import axios from 'axios';

function MenuPage() {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleChange = (selectedOption) => {
        const selectedLanguage = selectedOption.value;
        i18n.changeLanguage(selectedLanguage);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleMenuClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        const menuHeight = document.querySelector('.nav').offsetHeight;

        if (section) {
            const offset = section.offsetTop - menuHeight;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
        setOpen(false)
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        const telegram_bot_id = "7127598664:AAEXfRivlYDlHmGpewNnggFY9DWvgfZZ25o";
        const chat_id = 6706091019;
        const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
        const method = 'POST';
        const name = values.name;
        const phone = values.phone;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            message.success('Muvaffaqiyatli yuborildi')
            form.resetFields();
        }).catch(error => {
            message.error('Yuborishda xatolik')
        });
    };
    return (
        <section style={{ position: 'relative' }} id="main-section">
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul className="nav-list">
                        <li className="nav-item nav-logo">
                            <img src={logo} alt="Error" className="logo" />
                        </li>
                        <div className="nav-items">
                            <li className="nav-item" onClick={() => handleMenuClick("main-section")}>{t('header.menu1')} </li>
                            <li className="nav-item" onClick={() => handleMenuClick("projects")}>{t('header.menu2')}</li>
                            <li className="nav-item" onClick={() => handleMenuClick("news")}>{t('header.menu3')}</li>
                            <li className="nav-item" onClick={() => handleMenuClick("about")}>{t('header.menu4')}</li>
                            <li className="nav-item" onClick={() => handleMenuClick("capability")}>{t('header.menu5')}</li>
                            <li className="nav-item">
                                <Select
                                    className='nav-select'
                                    labelInValue
                                    defaultValue={{
                                        value: i18n.language,
                                        label: i18n.language,
                                    }}
                                    style={{ width: 100, color: 'black' }}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'uzbek', label: 'Uzbek', },
                                        { value: 'english', label: 'English', },
                                    ]}
                                />
                            </li>
                            <li className="nav-item contact" onClick={showModal}>{t('header.menu6')}</li>
                            <li onClick={showDrawer} className="sidebar"><FontAwesomeIcon icon={faBars} /></li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="nav-video">
                <video autoPlay={true} muted loop className="video-item">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="nav-container">
                    <div className="since">
                        <p>{t('video.since')}</p>
                        <div className="line"></div>
                    </div>
                    <h1 className="title" >
                        {t('video.title1')} <br /> <span className="title1">{t('video.title2')}</span> {t('video.title3')}
                    </h1>
                    <div className="see">
                        <p className="see-item" onClick={() => handleMenuClick("projects")}>{t('video.work')}
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight} /></span>
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </p>
                        <p className="see-item" onClick={() => handleMenuClick("connect")}>{t('video.join')}
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight} /></span>
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </p>
                    </div>
                </div>
                <div className="icon-item" >
                    <div className="icon-button">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="icon-button">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                <Drawer className="custom-drawer" onClose={onClose} open={open}>
                    <div className="sub-menu-item" onClick={() => handleMenuClick("main-section")}>{t('header.menu1')}</div>
                    <div className="sub-menu-item" onClick={() => handleMenuClick("project")}>{t('header.menu2')}</div>
                    <div className="sub-menu-item" onClick={() => handleMenuClick("news")}>{t('header.menu3')}</div>
                    <div className="sub-menu-item" onClick={() => handleMenuClick("about")}>{t('header.menu4')}</div>
                    <div className="sub-menu-item" onClick={() => handleMenuClick("capability")}>{t('header.menu5')}</div>
                    <div className="sub-menu-item">
                        <Select
                            labelInValue
                            defaultValue={{
                                value: i18n.language,
                                label: i18n.language,
                            }}
                            style={{ width: 100, color: 'black' }}
                            onChange={handleChange}
                            options={[
                                { value: 'uzbek', label: 'Uzbek', },
                                { value: 'english', label: 'English', },
                            ]}
                        />
                    </div>
                    <div className="sub-menu-item contact" onClick={showModal}>{t('header.menu6')}</div>
                </Drawer>
            </div>
            <>
                <Modal title="BIZ SIZGA QO'NG'IROQ QILAMIZ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={400} footer={false}>
                    <p>Raqamingizni qoldiring, biz sizga qo'ng'iroq qilamiz.</p>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        form={form}
                        onFinish={onFinish}
                   >
                    
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                           wrapperCol={{span:24}}
                           style={{marginTop:'10px'}}
                        >
                            <Input placeholder='Ismingizni kiriting' style={{height:'40px'}}/>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phonenumber!',
                                },
                            ]}
                           wrapperCol={{span:24}}
                           style={{marginTop:'10px',height:'40px'}}
                        >
                            <Input placeholder='Telefon raqam' style={{height:'40px'}}/>
                        </Form.Item>
                        <Form.Item
                        name="bulim"
                           wrapperCol={{span:24}}
                        >
                        <Select
                            labelInValue
                            defaultValue={{
                                value: "Bo'lim",
                              
                            }}
                    
                            style={{ color: 'black',height:'40px' }}
                            options={[
                                { value: "Savdo bo'lim ", label: "Savdo bo'lim ", },
                                { value: "Kadrlar bo'limi", label: "Kadrlar bo'limi", },
                                { value: "Sotib olish bo'limi", label: "Sotib olish bo'limi", },
                                { value: "Murojatlar bo'limi", label: "Murojatlar bo'limi", },
                            ]}
                        />
                        </Form.Item>
                        <Form.Item
                            name="submit"
                            wrapperCol={{span:24}}
                           style={{marginTop:'10px'}}
                        
                        >
                            <Button htmlType='submit' style={{width:'100%',backgroundColor:"#F35825",color:'white',height:'40px'}}>Yuborish</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        </section>
    );
}

export default MenuPage;
;