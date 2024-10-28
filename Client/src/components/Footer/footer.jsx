import React from 'react'
import './footer.css'
import facebook_icon from '../../assets/icons/facebook_icon.png';
import instagram_icon from '../../assets/icons/instagram_icon.png';
import twitter_icon from '../../assets/icons/twitter_icon.png';
import youtube_icon from '../../assets/icons/youtube_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
            <img src={facebook_icon}/>
            <img src={instagram_icon}/>
            <img src={twitter_icon}/>
            <img src={youtube_icon}/>
        </div>
        <ul>
            <li>Audio Description</li>
            <li>Help center</li>
            <li>Gift Cards</li>
            <li>MEdia center</li>
            <li>Investor Realms</li>
            <li>Jobs</li>
            <li>Terms of Use </li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact US</li>
        </ul>
        <p className='copyright'>&#169;1997-2024 Netflix,Inc.</p>
    </div>
  )
}

export default Footer