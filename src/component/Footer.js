// Footer.js
import React from 'react';
import img from './dribbble-logo.png';
import './Footer.css';
import x from './twitter.png'
import face from './facebook.png'
import insta from './instagram.png'
import pint from './pinterest-logo.png'

const Footer = () => {
    return (
        <div> 
            <div class="button-container">
                <a href='/find-designers/topic2'><button class="btnn">Load more work</button></a>
            </div>

        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                <img src={img} alt='dribbble img' />
                </div>
                <div className="footer-links">
                    <a href='/find-designers/topic2'>For designers</a>
                    <a href='/find-designers/topic2'>Hire talent</a>
                    <a href='/find-designers/topic2'>Inspiration</a>
                    <a href='/find-designers/topic2'>Advertising</a>
                    <a href='/find-designers/topic2'>Blog</a>
                    <a href='/find-designers/topic2'>About</a>
                    <a href='/find-designers/topic2'>Careers</a>
                    <a href='/find-designers/topic2'>Support</a>
                </div>
                <div className='icons'>
                    <img alt="" src={x}/>
                    <img alt="" src={face}/>
                    <img alt="" src={insta}/>
                    <img alt="" src={pint}/>
                </div>
            </div>
           
            <div className="footer-bottom">
                <div className='footer-bottom-left'>
                    <span>© 2024 Dribbble</span>
                    <a href='/find-designers/topic2'>Terms</a>
                    <a href='/find-designers/topic2'>Privacy</a>
                    <a href='/find-designers/topic2'>Cookies</a>
                </div>
                <div className='footer-bottom-right'>
                    <a href='/find-designers/topic2'>Jobs</a>
                    <a href='/find-designers/topic2'>Designers</a>
                    <a href='/find-designers/topic2'>Freelancers</a>
                    <a href='/find-designers/topic2'>Tags</a>
                    <a href='/find-designers/topic2'>Places</a>
                    <a href='/find-designers/topic2'>Resources</a>
                </div>
            </div>
        </footer>
        </div>

    );
}

export default Footer;
