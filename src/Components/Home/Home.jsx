import React, {useState, useEffect} from 'react'
import classes from './Home.module.css'
import Model3D from '../common/3DModel/3DModel'
import img1 from '../../Assets/raptor3d.jpg'
import img2 from '../../Assets/raptor5d.jpg'
import {Link, useNavigate } from 'react-router-dom'
import { GetHomeSlider } from '../getdata/GetHomeSlider'
import SocialMedia from '../Social/SocialMedia'
import { GetRecentPartner } from '../getdata/GetRecentPartner'
import img from '../../Assets/cont.png'

const Home = () => {
  const [slideImg, setSlide] = useState(null);
  const [partnerInfo, getPartner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // images for slider
    const data = GetHomeSlider();
    setSlide(data);
  },[])

  useEffect(() => {
    async function deal(){
      const data = await GetRecentPartner();
      getPartner(data);
    }
    deal();
  },[])

  return (
    <div className={classes.body}>
      <div className={classes.D3model}></div>

      {/* what we do */}
      <div className={classes.part2}>
        <div className={classes.im}>
          <img src={img1} className={classes.img1} alt=''/>
          <img src={img2} className={classes.img2} alt=''/>
        </div>
        <div className={classes.do}>
          <p className={classes.p}>What we do</p>
          <h2 className={classes.h2}>Gallery: 2023 Ford Mustang Mach-E (Euro-spec)</h2>
          <p className={classes.details}>Ford also introduces a new slogan as part of its marketing revamp. The new slogan is called "Adventurous Spirit," which, according to the company, stands for the American values of "freedom, outdoors, and adventure."</p>
          <Link to={'./contact'} style={{textDecoration:"none"}}><button className={classes.btn}>Contact Us</button></Link>
        </div>
      </div>

      {/* achievement slider */}
      <div className={classes.part3}>
        <h1 className={classes.hh}>ACHIEVEMENTS</h1>
      </div>

      {/* media gallery */}
      <div className={classes.part4}>
        <h1 className={classes.hh}>MEDIA GALLERY</h1>
        <SocialMedia/>
      </div>

      {/* recent partners */}
      <div className={classes.part5}>
        <h1 className={classes.hh1}>Partners</h1>
        <div className={classes.r}>
          <div className={classes.partner}>
          {
            (partnerInfo === null)?<></>
            :partnerInfo.map((e) => {
              console.log(e)
              return <img src={e.logo} className={classes.partr} onClick={()=>window.open(`${e.link}`,'_blank')} alt=''/>
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
          <img src={img} className={classes.ccc} alt=''/>
          <div className={classes.cd}>
            <p className={classes.cp}>Contact us for any query or inquiry</p>
            <Link to={'./contact'} style={{textDecoration:"none"}}><button className={classes.btn}>Contact Us</button></Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home