import React from 'react';
import Insta from '../imagens/instagram.png';
import Face from '../imagens/facebook.png';
import Twitter from '../imagens/twitter.png';
import Tiktok from '../imagens/tiktok.png';

function Footer() {
  return(
    <div className='footer-all'> 
      <div className='redes-footer'>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={Insta} alt="Instagram logo" className='logos-footer'/>
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={Face} alt="Facebook logo" className='logos-footer'/>
        </a>

        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="Twitter logo" className='logos-footer'/>
        </a>

        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
          <img src={Tiktok} alt="Tiktok logo" className='logos-footer'/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
