import React  from "react";
import {useTranslation} from "react-i18next";

function Component1(){
    const {t} = useTranslation()
    return(
        <section>
            <div className="info">
                <div className="container">
                    <div className="stick"></div>
                    <h2 className="sub-title">{t('page1.title')}</h2>
                    <p className="sub-text">
                        {t('page1.text')}
                    </p>
                    <h3 className="sub-partner">
                        {t('page1.partner')}
                    </h3>

                </div>
            </div>
        </section>
    )
}

export default Component1;