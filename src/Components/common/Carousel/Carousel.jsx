import React, { useEffect, useState } from 'react'
import classes from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/css/navigation"
import "swiper/css"


const array = [
    {
        id: 1,
        name: "Raptor 1",
        img: "https://wallpapers.com/images/hd/cool-photos-background-1920-x-1080-1fabk3fc9tj8d2xf.jpg"
        
    },
    {
        id: 2,
        name: "Raptor 2",
        img: "https://img.freepik.com/premium-photo/lotus-f1-racing-car-hill-style-intense-movement-expression_921860-35238.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais"
    },
    {
        id: 3,
        name: "Raptor 3",
        img: "https://img.freepik.com/premium-photo/foggy-mountain-landscape-with-oldfashioned-racing-car-ai-generated_758600-257.jpg"
    },
    {
        id: 4,
        name: "Raptor 4",
        img: "https://cdn.trendhunterstatic.com/thumbs/terrain-race-car.jpeg?auto=webp"
    },
    {
        id: 5,
        name: "Raptor 5",
        img: "https://wallpapers.com/images/hd/auto-racing-event-fih65wecklhr60q5.jpg"
    },
    {
        id: 6,
        name: "Raptor 6",
        img: "https://cdn.wallpapersafari.com/13/30/GSqYe7.jpg"
    },
    {
        id: 7,
        name: "Raptor 7",
        img: "https://wallpaperaccess.com/full/153454.jpg"
    },
    {
        id: 8,
        name: "Raptor 8",
        img: "https://wallpaperaccess.com/full/5354.jpg"
    },
    {
        id: 9,
        name: "Raptor 9",
        img: "https://wallpaperaccess.com/full/1534.jpg"
    }
]


const Carousel = () => {
    const [slidsNumber, setSlideNumber] = useState(3)
    const [activeSlide, setActiveSlide] = useState("isNext")
    const swiperSlide = useSwiperSlide();
    const swiper = useSwiper();
    // console.log(swiperSlide.isActive);
    useEffect(() => {
        // console.log(window.innerWidth);
        if (window.innerWidth < 992) {
            setSlideNumber(1)
            setActiveSlide("isActive")
        }
        else {
            setSlideNumber(3)
            setActiveSlide("isNext")
        }
    }, [])
    return (
        <div className={classes.main}>
            <Swiper
                className={classes.carousel}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={slidsNumber}
                navigation
                loop={true}
                style={{"--swiper-navigation-color": "#fff"}}
            >
                {
                    array.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={`${classes.outer} ${swiperSlide ? classes.active : ""}`}>
                                {({ isActive, isNext }) => (
                                    <div className={`${classes.item}`}>
                                        <div className={`${classes.innerItem} 
                                                         ${activeSlide === "isNext" && isNext ? classes.active : ""}
                                                         ${activeSlide === "isActive" && isActive ? classes.active : ""}
                                                         `}
                                        >
                                            <div className={classes.overlay}></div>
                                            <div className={classes.content}>
                                                <h1>{item.name}</h1>
                                                <button>Know More</button>
                                            </div>
                                            <img src={item.img} alt="" />
                                        </div>
                                        {/* }} */}
                                    </div>
                                )}
                            </SwiperSlide>
                        )
                    })
                }
                <div className={classes.buttons}>
                    <div className={classes.prev}>
                        <button onClick={() => swiper.slidePrev()}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className={classes.next}>
                        <button onClick={() => swiper.slideNext()}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </Swiper>
        </div >
    )
}

export default Carousel