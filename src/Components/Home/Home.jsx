import React, { useState, useEffect } from 'react'
import classes from './Home.module.css'
import img1 from '../../Assets/raptor3d.jpg'
import img2 from '../../Assets/raptor5d.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { GetHomeSlider } from '../getdata/GetHomeSlider'
import SocialMedia from '../Social/SocialMedia'
import { GetRecentPartner } from '../getdata/GetRecentPartner'
import img from '../../Assets/cont.png'
import Carousel from '../common/Carousel/Carousel'
import CarModel from '../common/Model/CarModel'

const Home = () => {
  const [slideImg, setSlide] = useState(null);
  const [partnerInfo, getPartner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // images for slider
    const data = GetHomeSlider();
    setSlide(data);
  }, [])

  useEffect(() => {
    async function deal() {
      // const data = await GetRecentPartner();
      // getPartner(data);
    }
    deal();
    const divElement = document.getElementById('scrollO');
    const sectionElements = document.getElementsByClassName('section');
    divElement.addEventListener('scroll', () => {
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      }
    })
  }, [])


  return (
    <div className={classes.body}>
      <div className={classes.D3model}>
        <div className={classes.carDiv}>
          <CarModel />
        </div>
        <div className={classes.scrollOverlay} id="scrollO" >
          <div className={classes.scrollDiv}>
            <section style={{ "--top": "500px", "--left": "500px" }} className='section'>
              <h1>
                BAJA
              </h1>
              <p>
                BAJA SAE is an inter collegiate off-road competition run by the Society of Automotive Engineers. It challenges engineering students to design, build and race an off-road vehicle that can withstand the toughest elements of rough terrain.
              </p>
            </section >
            <section style={{ "--top": "500px", "--left": "500px" }} className='section'>
              <h1>
                WE
              </h1>
              <p>
                We are a family of engineers where each member work towards the realization of a single dream, which is to emerge victorious. We participate in BAJA SAEINDIA and BAJA SAE International to fuel our passion for creating an All-Terrain Vehicle which has the capability to Win.
              </p>
            </section>
            <section style={{ "--top": "500px", "--left": "500px" }} className='section'>
              <h1>
                PARTNERS
              </h1>
              <p>
                We would like to express sincere gratitude towards all our partners. With them, we have experienced industrial life, a strong exchange of technology and paved our way towards success. Their continuous support makes it possible for us to bring home glory.
              </p>
            </section>
            <section style={{ "--top": "500px", "--left": "500px" }} className='section'>
              <h1>
                Support Us
              </h1>
              <p>
                Dreams aspirations are not easily obtained but one of the hardest things to do is to keep going is to keep chasing.
                Being a Predator we will definitely strive for success but we want you to be our support while carrying this responsibility.
                Contribute to a cause, Be a Predator with us.
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* what we do */}
      <div className={classes.part2}>
        <div className={classes.im}>
          <img src={img1} className={classes.img1} alt='' />
          <img src={img2} className={classes.img2} alt='' />
        </div>
        <div className={classes.do}>
          <p className={classes.p}>What we do</p>
          <h2 className={classes.h2}>Gallery: 2023 Ford Mustang Mach-E (Euro-spec)</h2>
          <p className={classes.details}>Ford also introduces a new slogan as part of its marketing revamp. The new slogan is called "Adventurous Spirit," which, according to the company, stands for the American values of "freedom, outdoors, and adventure."</p>
          <Link to={'./contact'} style={{ textDecoration: "none" }}><button className={classes.btn}>Contact Us</button></Link>
        </div>
      </div>

      {/* achievement slider */}
      <div className={classes.part3}>
        <h1 className={classes.hh}>ACHIEVEMENTS</h1>
        <Carousel />
      </div>

      {/* media gallery */}
      <div className={classes.part4}>
        <h1 className={classes.hh}>MEDIA GALLERY</h1>
        {/* <SocialMedia /> */}
      </div>

      {/* recent partners */}
      <div className={classes.part5}>
        <h1 className={classes.hh1}>Partners</h1>
        <div className={classes.r}>
          <div className={classes.partner}>
            {
              (partnerInfo === null) ? <></>
                : partnerInfo?.map((e, i) => {
                  console.log(e)
                  return <img key={i} src={e.logo} className={classes.partr} onClick={() => window.open(`${e.link}`, '_blank')} alt='' />
                })
            }
          </div>
          <button className={classes.ab}>Become Partner</button>

        </div>
      </div>

      {/* contact us */}
      <div className={classes.part6}>
        <h1 className={classes.hh1}>Contact Us</h1>
        <div className={classes.contact}>
          <img src={img} className={classes.ccc} alt='' />
          <div className={classes.cd}>
            <p className={classes.cp}>Contact us for any query or inquiry</p>
            <Link to={'./contact'} style={{ textDecoration: "none" }}><button className={classes.btn}>Contact Us</button></Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home