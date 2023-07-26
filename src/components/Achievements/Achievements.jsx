import React, { useState } from 'react'
import classes from './Achievements.module.css'
import information from './Details'
import InfoBox from './InfoBox/InfoBox'

const Achievements = () => {
    const [index, setIndex] = useState(0)

    const [scrollHeight, setScrollHeight] = useState(window.scrollY)
    const [isSticky, setIsSticky] = useState(true)

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
            <div className={classes.slider} style={{position: `${isSticky ? "sticky" : "static"}`}}>
                {
                    information.sliderImages.map((current, idx) => (
                        <div key={idx} className={`${idx === index ? classes.active : ""} ${classes.element}`}>
                            <img
                                onClick={() => setIndex(idx)}
                                className={`${idx === index ? classes.active : ""}`}
                                src={current.img}
                                alt={current.name}
                            />
                            <p className={classes.name}>
                                {current.name}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className={classes.details} >
                <InfoBox details={information.sliderDetails[index]} />
            </div>
        </div>
    )
}

export default Achievements