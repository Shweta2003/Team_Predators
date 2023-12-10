import React, { useState, useEffect } from 'react'
import classes from './Achievements.module.css'
import InfoBox from './InfoBox/InfoBox'
import { GetSliderData } from '../getdata/GetSliderData';
import { useLocation } from 'react-router-dom';

const Achievements = () => {
    const location = useLocation()
    const {activeIndex} = location.state || {activeIndex: 0}
    const [index, setIndex] = useState(activeIndex || 0)
    const [sliderdata, setSlider] = useState([])

    const [scrollHeight, setScrollHeight] = useState(window.scrollY)
    const [isSticky, setIsSticky] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const Data = await GetSliderData();
                console.log(Data);
                setSlider(Data);

            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const handleScroll = () => {
        setScrollHeight(window.scrollY)
        if (scrollHeight > 500) {
            setIsSticky(false)
        }
        else {
            setIsSticky(true)
        }
        // console.log(scrollHeight);
    }

    document.addEventListener('scroll', handleScroll)

    return (
        <div className={classes.main}>
            <div className={classes.dummy} style={{ position: `${isSticky ? "sticky" : "static"}` }}>
                <div className={classes.slider} >
                    {
                        sliderdata.map((current, idx) => (
                            <div key={idx} className={`${idx === index ? classes.active : ""} ${classes.element}`}>
                                <img
                                    onClick={() => setIndex(idx)}
                                    className={`${idx === index ? classes.active : ""}`}
                                    src={current.image}
                                    alt={current.name}
                                />
                                <p className={classes.name}>
                                    {current.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.details} >
                <InfoBox details={sliderdata[index]?.achievements} />
            </div>
        </div>
    )
}

export default Achievements