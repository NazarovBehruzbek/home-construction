import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './news.scss';
import { FreeMode, Pagination,Scrollbar } from 'swiper/modules';
import yangiyil from "./images/newyear.png";
import zakon from "./images/zakon.png";
import qurilish from "./images/qurilish.webp";
import {useTranslation} from "react-i18next";

function News(){
    const {t} = useTranslation()
    return(
        <section>
            <div className="news" id="news">
                <div className="container">
                    <h2>{t('news.title')}</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        scrollbar={{ draggable: true }}
                        modules={[FreeMode,Scrollbar]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is <= 768px
                            330: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // when window width is <= 1024px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1000: {
                                slidesPerView: 3,
                                spaceBetween: 20}
                        }}
                    >
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={yangiyil} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">{t('news.title1')}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={zakon} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">{t('news.title2')}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={qurilish} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">{t('news.title3')}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={yangiyil} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">{t('news.title1')}</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default News