//Bar.js
import React, { useState } from 'react';
import { HiSearch, HiChevronDown } from 'react-icons/hi';
import links from './links';
import img from './dribbble-logo.png';
import './Bar.css';

const reactIconStyle = { width: '20px', height: '20px', color: '#9e9ea7', cursor: 'pointer' };

function DesktopNavbar() {
    const [showDropdown, setShowDropdown] = useState(null);

    const toggleDropdown = (name) => {
        if (showDropdown === name) {
            setShowDropdown(null);
        } else {
            setShowDropdown(name);
        }
    };

    return (
        <div className='nav-container'>
            <nav className='nav-desktop'>
                <ul className='desktop-menu'>
                <div className='nav-logo'>
                    <img src={img} alt='dribbble img' />
                </div>
                    {links.map((link) => (
                        <li 
                            key={link.name} 
                            onMouseEnter={() => toggleDropdown(link.name)} 
                            onMouseLeave={() => toggleDropdown(link.name)}
                        >
                            <a href={link.route}>
                                {link.name}
                                {(link.name === 'Find designers' || link.name === 'Courses') && <HiChevronDown style={{ marginLeft: '5px' }} />}
                            </a>

                            {link.name === 'Find designers' && showDropdown === 'Find designers' && (
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a href='/find-designers/topic1'>Designer Search</a>
                                        <p className='note'>Quickly find your next designer</p>
                                    </li>
                                    <li>
                                        <a href='/find-designers/topic2'>Post a job</a>
                                        <p className='note'>The #1 job board for design talent</p>
                                    </li>
                                </ul>
                            )}
                            {link.name === 'Courses' && showDropdown === 'Courses' && (
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a href='/courses/topic1'>UX Diploma</a>
                                        <p className='note'>Learn UX from scratch in 6 months</p>
                                    </li>
                                    <li>
                                        <a href='/courses/topic2'>UI certificate</a>
                                        <p className='note'>12-week UI skill building for designers</p>
                                    </li>
                                    <li>
                                        <a href='/courses/topic3'>Live interactive workshops</a>
                                        <p className='note'>with design professionals</p>
                                    </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className='nav-actions'>
                <div className='search-container'>
                    <HiSearch style={reactIconStyle} />
                    <input type='text' placeholder='Search...' className='search-input' />
                </div>
                <a className="btn" href='/find-designers/topic2'>Log In</a>
                <a className="btn" href='/find-designers/topic2'><button className="auth-btn">Sign Up</button></a>
            </div>
        </div>
    );
}

export default function Navbar() {
    return (
        <header>
            <DesktopNavbar />
        </header>
    );
}
