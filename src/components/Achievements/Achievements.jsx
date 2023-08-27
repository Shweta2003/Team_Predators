import React, { useEffect, useState } from 'react'
import classes from './Achievements.module.css'
import information from './Details'
import InfoBox from './InfoBox/InfoBox'

import { db } from '../../firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'

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

    // useEffect(() => {
    const fetchData = async() => {
        const collectionName = "sliderDetails"
        const detailsRef = collection(db, collectionName)
        const query1 = query(detailsRef, where("name", "==", "Raptor 7"))
        const data = await getDocs(query1)
        const details = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

        console.log(details);
    }
    // fetchData()
    // })

    //  To do 
    // set current raptor in a variable and fetch its data from the database and add it to the localStorage.


    return (
        <div className={classes.main}>
            <div className={classes.slider} style={{ position: `${isSticky ? "sticky" : "static"}` }}>
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
            <div style={{ color: "#fff",marginTop: "20px" }} onClick={fetchData}>This is the info class</div>
        </div>
    )
}

export default Achievements