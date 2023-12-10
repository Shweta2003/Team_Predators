import React from 'react'
import classes from './Gallery.module.css'

const image_links = [
    "https://www.britannica.com/topic/Mona-Lisa-painting",
    "https://en.wikipedia.org/wiki/The_Starry_Night",
    "https://en.wikipedia.org/wiki/The_Scream",
    "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
    "https://en.wikipedia.org/wiki/American_Gothic",
    "https://en.wikipedia.org/wiki/Guernica_%28Picasso%29",
    "https://en.wikipedia.org/wiki/The_Kiss_%28Klimt%29",
    "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
    "https://en.wikipedia.org/wiki/The_Persistence_of_Memory",
    "https://www.artic.edu/artworks/16568/water-lilies",
    "https://en.wikipedia.org/wiki/The_Thinker",
    "https://en.wikipedia.org/wiki/Venus_de_Milo",
    "https://en.wikipedia.org/wiki/Winged_Victory_of_Samothrace",
    "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",
    "https://romecolosseumtickets.tours/colosseum-arhitecture-rome/",
    "https://en.wikipedia.org/wiki/Taj_Mahal",
    "https://en.wikipedia.org/wiki/Eiffel_Tower",
    "https://en.wikipedia.org/wiki/Golden_Gate_Bridge",
    "https://en.wikipedia.org/wiki/Great_Wall_of_China",
    "https://en.wikipedia.org/wiki/Burj_Khalifa"
]

const Gallery = () => {
    return (
        <div className='main'>
            {
                image_links.map((item, index) =>
                    <img src={item} key={index} />
                )
            }
        </div>
    )
}

export default Gallery