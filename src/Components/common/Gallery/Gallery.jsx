import React from 'react'
import classes from './Gallery.module.css'
import img1 from '../../../Assets/TrialImages/1.jpg'
import img2 from '../../../Assets/TrialImages/2.jpeg'
import img3 from '../../../Assets/TrialImages/3.jpg'
import img4 from '../../../Assets/TrialImages/4.jpeg'
import img5 from '../../../Assets/TrialImages/5.jpg'
import img6 from '../../../Assets/TrialImages/6.jpg'
import img7 from '../../../Assets/TrialImages/7.jpg'
import img8 from '../../../Assets/TrialImages/8.jpeg'
import img9 from '../../../Assets/TrialImages/9.jpg'
import img10 from '../../../Assets/TrialImages/10.jpeg'
import img11 from '../../../Assets/TrialImages/11.jpeg'
import img12 from '../../../Assets/TrialImages/12.jpeg'
import img13 from '../../../Assets/TrialImages/13.jpg'
import img14 from '../../../Assets/TrialImages/14.jpg'
import img15 from '../../../Assets/TrialImages/15.jpeg'
import img16 from '../../../Assets/TrialImages/16.jpg'


// const image_links = [
//     "https://www.britannica.com/topic/Mona-Lisa-painting",
//     "https://en.wikipedia.org/wiki/The_Starry_Night",
//     "https://en.wikipedia.org/wiki/The_Scream",
//     "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
//     "https://en.wikipedia.org/wiki/American_Gothic",
//     "https://en.wikipedia.org/wiki/Guernica_%28Picasso%29",
//     "https://en.wikipedia.org/wiki/The_Kiss_%28Klimt%29",
//     "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
//     "https://en.wikipedia.org/wiki/The_Persistence_of_Memory",
//     "https://www.artic.edu/artworks/16568/water-lilies",
//     "https://en.wikipedia.org/wiki/The_Thinker",
//     "https://en.wikipedia.org/wiki/Venus_de_Milo",
//     "https://en.wikipedia.org/wiki/Winged_Victory_of_Samothrace",
//     "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",
//     "https://romecolosseumtickets.tours/colosseum-arhitecture-rome/",
//     "https://en.wikipedia.org/wiki/Taj_Mahal",
//     "https://en.wikipedia.org/wiki/Eiffel_Tower",
//     "https://en.wikipedia.org/wiki/Golden_Gate_Bridge",
//     "https://en.wikipedia.org/wiki/Great_Wall_of_China",
//     "https://en.wikipedia.org/wiki/Burj_Khalifa"
// ]

const image_links = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8, 
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16
]

const Gallery = () => {
    return (
        <div className={classes.main}>
            {
                image_links.map((item, index) =>
                    <img src={item} key={index} />
                )
            }
        </div>
    )
}

export default Gallery