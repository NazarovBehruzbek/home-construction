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

function News(){
    return(
        <section>
            <div className="news">
                <div className="container">
                    <h2>Kompaniya yangiliklari</h2>
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
                                <p className="news-title">Home build kompaniyasi hammani yangi 2023-yil bilan qutlaydi!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={zakon} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">Home build kompaniyasi hammani yangi 2023-yil bilan qutlaydi!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={qurilish} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">Qurilish loyihasining mutaxassisi deb kimni atash mumkin?</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-item">
                                <img src={yangiyil} alt="Error"/>
                                <div className="news-fon"></div>
                                <p className="news-title">Home build kompaniyasi hammani yangi 2023-yil bilan qutlaydi!</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default News