import React, {useEffect, useState} from 'react'
import Instafeed from 'instafeed.js';
import Component from './Component';
import classes from './Social.module.css'

const SocialMedia = () => {
  const [dataA, setdataA] = useState([])
  const [dataB, setdataB] = useState([])
  const [dataC, setdataC] = useState([])
  const date = new Date();
  var i = 1;

  const token_id = "IGQWRQd21hNVd5OFlOVkpQVzYwNFZA2dHVpcnRrQy1kbF9kS0lfemZAuVDYwZAV94QWFTYU85RGMydFJsZAnF1WC1WSWEwYUZA4bFJFNkw1WUgwSHo2aTRvUGc0SXpFTHJ6LUlkNzBvOUw5bllWb3FXWEs4NXVHdldtR3MZD"

    useEffect(() => {
        const userFeed = new Instafeed({
          get: 'user',
          target: 'instafeed-container',
          resolution: 'standard_resolution',
          accessToken: token_id,
          // limit: 6,
          template:
          '<a href = "{{link}}"><img classname = "something" title = "{{caption}}" src = "{{image}}"/><p >{{caption}}</p></a>',
          filter: function(image) {
            // if(image.caption.includes("#fun")){
              const time = new Date(image.timestamp)
              const diff = Math.floor((date - time)/(1000 * 60 * 60))
              var a = ""
              if(diff <= 24){
                if(diff === 1){
                  a = diff + " hour ago"
                }else{
                  a = diff + " hours ago"
                } 
              }else {
                const days = Math.floor(diff/24)
                if(days <= 365){
                  if(days === 1){
                    a = days + " day ago"
                  }
                  else{
                    a = days + " days ago"
                  }
                }else{
                  const year = Math.floor(days/365)
                  if(year === 1){
                    a = year + " year ago"
                  }
                  else{
                    a = year + " years ago"
                  }
                }
              }
              const newData = [image.image, image.caption, image.link, a]
              if(i%3 === 1){
                setdataA((prevData) => [...prevData,newData])
              }else if(i%3 === 2){
                setdataB((prevData) => [...prevData,newData])
              }else{
                setdataC((prevData) => [...prevData,newData])
              }
              i ++;
            // }
            return (image)
    // return (image.caption.includes("#fun"));
  }
        });
        userFeed.run();
      }, []);

  return (
    <>
    <div id="instafeed-container" className={classes.abc}>      
    </div>
    <div className={classes.main}>
    <div className={classes.first}>
    {
      dataA.map((e) => {
        return <Component img={e[0]} link={e[2]} desc={e[1]} time={e[3]}/>
        
      })
    }
    </div>
    <div className={classes.second}>
    {
      dataB.map((e) => {
        return <Component img={e[0]} link={e[2]} desc={e[1]} time={e[3]}/>
      })
    }
    </div>
    <div className={classes.third}>
      {console.log(dataC)}
    {
      
      dataC.map((e) => {
        return <Component img={e[0]} link={e[2]} desc={e[1]} time={e[3]}/>
      })
    }
    </div>
    </div>
    </>
  )
}

export default SocialMedia