import React from "react";
import "./background.scss"
import logo from "./images/logo1.png"
import {useTranslation} from "react-i18next";

function BackgroundPage (){
    const {t} = useTranslation()
    return(
        <section>
        <div className="background">
            <div className="container">
                <div className="infos">
                    <img src={logo} alt="" className="back-logo"/>
                    <h2>{t('backg.title')}</h2>
                    <p>{t('backg.text')}</p>
                    <h3>{t('backg.more')}</h3>
                </div>
            </div>
            <div className="back-fon"></div>

        </div>
        </section>
    )
}
export default BackgroundPage