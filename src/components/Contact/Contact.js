import React from 'react'
import { Element } from 'react-scroll'

import './contact.css';


const Contact = () => {
   

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/reshnidreamx/', '_blank');
    };
    

  return (
    <div>
        <Element className="contact" id="contact">
            <h1 className='contact_title'>CONTACT</h1>
            <div className='contact_container'>
                <p>
                    Email : <span>reshni1975@gmail.com</span>
                </p>
                <p>
                    Github Username : <span>https://github.com/reshniVisionX</span>
                </p>
                <div className='icons'>
                  
                   <div className="social_media">
<img src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Twitter-icon.png" alt="img" className="icon"/>
<img src="http://clipart-library.com/new_gallery/410617_facebook-icon-transparent-png.jpg" className="icon" alt="img"></img>
<img src="http://www.clipartbest.com/cliparts/yio/6Xo/yio6XoAyT.png" className="icon" alt="img"></img>
<img src="https://1.bp.blogspot.com/-onvhHUdW1Us/YI52e9j4eKI/AAAAAAAAE4c/6s9wzOpIDYcAo4YmTX1Qg51OlwMFmilFACLcBGAsYHQ/s1600/Logo%2BLinkedin.png" alt="img" className="icon" onClick={()=>handleLinkedIn()}></img>
</div>
                </div>
            </div><br/><br/>
        </Element>
    </div>
  )
}

export default Contact