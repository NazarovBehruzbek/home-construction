import React, {useEffect, useState} from 'react';
import logo from "./images/logo.png"
import video from "./images/video.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Drawer, Select} from "antd";

function MenuPage() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
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
    return (
        <section style={{position:'relative'}}>
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul className="nav-list">
                        <li className="nav-item nav-logo">
                            <img src={logo} alt="Error" className="logo"/>
                        </li>
                        <div className="nav-items">
                            <li className="nav-item">PROJECTS</li>
                            <li className="nav-item">WHO WE ARE</li>
                            <li className="nav-item">CAPABILITIES</li>
                            <li className="nav-item">NEWS</li>
                            <li className="nav-item">VIDEOS</li>
                            <li className="nav-item">
                                <Select
                                    labelInValue
                                    defaultValue={{
                                        value: 'uzbek',
                                        label: 'Uzbek',
                                    }}
                                    style={{
                                        width: 100,
                                        color: 'black',
                                    }}
                                    options={[
                                        {
                                            value: 'uzbek',
                                            label: 'Uzbek',
                                        },
                                        {
                                            value: 'english',
                                            label: 'English',
                                        },
                                    ]}
                                />

                            </li>
                            <li className="nav-item contact">CONTACT</li>
                            <li onClick={showDrawer} className="sidebar"><FontAwesomeIcon icon={faBars}/></li>
                        </div>
                    </ul>

                </div>
            </div>
            <div className="nav-video">
                <video autoPlay={true} muted loop className="video-item">
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="nav-container">
                    <div className="since">
                        <p>Sinse 1990</p>
                        <div className="line"></div>
                    </div>
                    <h1 className="title" >
                        COMPLETE <span className="title1">CONSTRUCTION</span> SERVICES
                    </h1>
                    <div className="see">
                        <p className="see-item">SEE OUR WORK
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight}/></span>
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight}/></span>
                        </p>
                        <p className="see-item">JOIN OUR TEAM
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight}/></span>
                            <span className="icon-right"><FontAwesomeIcon icon={faChevronRight}/></span>
                        </p>
                    </div>
                </div>
                <div className="icon-item" >
                    <div className="icon-button">
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                    <div className="icon-button">
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                </div>
                <Drawer className="custom-drawer" onClose={onClose} open={open}>
                    <div className="sub-menu-item">PROJECTS</div>
                    <div className="sub-menu-item">PROJECTS</div>
                    <div className="sub-menu-item">WHO WE ARE</div>
                    <div className="sub-menu-item">CAPABILITIES</div>
                    <div className="sub-menu-item">NEWS</div>
                    <div className="sub-menu-item">VIDEOS</div>
                    <div className="sub-menu-item">
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'uzbek',
                                label: 'Uzbek',
                            }}
                            style={{
                                width: 100,
                                color: 'black',
                            }}
                            options={[
                                {
                                    value: 'uzbek',
                                    label: 'Uzbek',
                                },
                                {
                                    value: 'english',
                                    label: 'English',
                                },
                            ]}
                        />
                    </div>
                    <div className="sub-menu-item contact">CONTACT</div>
                </Drawer>
            </div>
        </section>
    );
}

export default MenuPage;
;