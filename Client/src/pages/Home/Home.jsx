import React, { useEffect } from 'react';
import './Home.css'
import Navbar from '../../components/NavBar/navbar';
import TitleCard from '../../components/TitleCards/TitleCard';
import hero_img from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/icons/hero_title.png';
import play_icon from '../../assets/icons/play_icon.png';
import info_icon from '../../assets/icons/info_icon.png';
import Footer from '../../components/Footer/footer';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('auth-token')){
      navigate('/login');
    }
  }, [])
  
  return (
    <div className='Home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_img} className='bg-img'/>
        <div className='Desc'>
          <img src={hero_title} className='Bg-title'/>
          <p>Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he
           is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy. 
          He struggles to choose between his duties as the Protector and a new love he comes across.</p>
          <div className='hero-btns'>
            <button className=' btn play-btn'>
              <img src={play_icon}/>Play
            </button>
            <button className='btn info-btn'>
              <img src={info_icon}/>More Info
            </button>
          </div>
        <TitleCard/>
        </div>
      </div>
      <div className='more-cards'>
        <TitleCard Title="Blockbuster Movies"/>
        <TitleCard Title="Only on netflix"/>
        <TitleCard Title="Recommended for you"/>
        <TitleCard Title="Upcoming"/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>

  )
}

export default Home