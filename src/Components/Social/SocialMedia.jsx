import React, {useEffect} from 'react'
import Instafeed from 'instafeed.js';

const SocialMedia = () => {

    useEffect(() => {
        const userFeed = new Instafeed({
          get: 'user',
          target: 'instafeed-container',
          resolution: 'low_resolution',
          accessToken: 'IGQWRQZAGowNHlRS0NhN1ZAtaWNjOG8yTGtERTRGWl9aRDBMb2lMMzJ3SFdLV1FVMS0xYWs0QVlheE9ZAb2R0LUNJUFhRZAmhhVEJmdTY5UnJMdFotUXZAKOVV1UDNlLXJoS3VGODhWakxVQWFRSFh5T2d5X29VUGRlNkEZD',
          template:'<a href = "{{link}}"><img classname = "something" title = "{{caption}}" src = "{{image}}"/><p>{{caption}}</p></a>',
          filter: function(image) {
    return (image.caption.includes("#fun"));
  }
        });
        userFeed.run();
      }, []);

  return (
    <div id="instafeed-container"></div>
  )
}

export default SocialMedia