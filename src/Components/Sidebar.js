import React from 'react';
import $ from 'jquery';

import Home from './Home';
import Portfolio from "./Portfolio";

import '../Style/Sidebar.css';
import About from "./About";
import Contact from "./Contact";


class Sidebar extends React.Component {

    componentDidMount() {
        const side_wrapper = document.querySelector('.side-wrapper');
        const side_content = document.querySelector('.side-content');
        const open_btn = document.querySelector('.hamburger');
        const close_btn = document.querySelector('.close-btn');

        open_btn.addEventListener('click', openMenu);
        close_btn.addEventListener('click', closeMenu);
        window.addEventListener('click', outsideClick);

        function openMenu() {
            side_wrapper.classList.add('opened');
            side_content.classList.add('slideIn');
            document.querySelector('body').style.overflow = 'hidden';
        }

        function closeMenu() {
            side_wrapper.classList.remove('opened');
            side_content.classList.remove('slideIn');
            document.querySelector('body').style.overflow = 'auto';
        }

        function outsideClick(e) {
            if (e.target === side_wrapper) {
                closeMenu();
            }
        }

        $("#about_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        });

        $("#portfolio_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 1000);
        });


        $("#home_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#home").offset().top
            }, 1000);
        });

        $("#contact_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 1000);
        });

    }

    render() {

        return(
            <div>
                <div className="page-wrapper">
                    <div className="top-nav">
                        <div className="toggler-container">
                            <button className="hamburger">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </button>
                        </div>
                    </div>
                    <div className="side-wrapper">
                        <div className="side-content">
                            <button className="close-btn">
                                <div className="line"></div>
                                <div className="line"></div>
                            </button>

                            <div className= "nav">
                                <ul>
                                    <li className= "nav-li"><a id = "home_link" href = "#home">HOME</a></li>
                                    <li className= "nav-li"><a id = "about_link" href = "#skills">ABOUT</a></li>
                                    <li className= "nav-li"><a id = "portfolio_link" href = "#portfolio">PORTFOLIO</a></li>
                                    <li className= "nav-li"><a id = "contact_link" href = "#contact">CONTACT ME</a></li>
                                    <li className= "nav-li"><a href = "home">CV</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <Home/>
                </div>
               <About/>
               <Portfolio/>
               <Contact/>
            </div>
        )
    }
}

export default Sidebar;
