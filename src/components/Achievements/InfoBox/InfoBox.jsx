import React from 'react'
import classes from './InfoBox.module.css'
import { motion } from 'framer-motion';

const InfoBox = ({ details }) => {
    const { name, img, air, points, awards, year, achievements } = details;
    return (
        <div className={classes.main}>
            <div className={classes.img}>
                <img src={img} alt='Raptor' />
            </div>
            <div className={classes.details}>
                <h1>{name}</h1>
                <div className={classes.overview}>
                    <div className={classes.box}>
                        <h2>{air}</h2>
                        <h3>AIR</h3>
                    </div>
                    <div className={classes.box}>
                        <h2>{points}</h2>
                        <h3>Points</h3>
                    </div>
                    <div className={classes.box}>
                        <h2>{awards}</h2>
                        <h3>Awards</h3>
                    </div>
                    <div className={classes.box}>
                        <h2>{year}</h2>
                        <h3>Year</h3>
                    </div>
                </div>
                <div className={classes.achievements}>
                    {achievements.map((current, idx) =>
                        <motion.div
                            initial={{opacity: 0,}}
                            animate={{opacity: 1,}}
                            transition={{delay: idx/5}}
                            key={idx} className={classes.achievement}>
                            <p>{current.name} <i> {current.value}</i></p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InfoBox