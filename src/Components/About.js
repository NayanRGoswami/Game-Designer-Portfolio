import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import $ from 'jquery';

import '../Style/About.css';


class About extends React.Component {

    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }

    render(){

        return(
            <div className= "about-panel" id = "about">
                <div className= "row">
                <div className= "col-md-4 about-heading">
                    <div className= "orange-stripe"></div>
                    <h1 className= "portfolio-heading">About</h1>
                    <h5 className= "my-work">Skills & Experience</h5>
                </div>

                    <div className= "col-md-8">
                        <p className= "about-para">
                            Hello,<br/><br/>
                            I am a student of Video Game Design Technologies in trioS college London, ON.
                            In this program I am learning video game concept development, video game analysis and technical design, drawing and Storyboarding, vector art, pixel art, 3d modelling, advanced animation, advanced unity game development and level design.
                            I thrive in creative and collaborative environments where hard work and passion for making great game is valued, and where I can leverage my strong technical background to enhance my designs and team. My career goals are to continue to learn and grow as a great designer.
                            <br/><br/>
                            “A creative man is motivated by the desire to achieve, not by the desire to beat others.” –            Ayn Rand
                        </p><br/><br/>
                    </div>
                </div>

                <h2 className= "skills-heading">Tool-Box</h2>

                <div className = "skills-container" data-aos='fade-up'>
                    <div className = "row">
                        <div className= "col-md-4">
                            <div className= "skills-show">
                                <div className= "skills-descrip">
                                    <img src = {require('../Images/Icons/sketchfab_icon.jpg')} alt = "Skecthfab icon" className = "skills-icon"/>
                                </div>

                                <div className= "description-skills">
                                    <p className= "skills-para">
                                        ext ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not only five
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className= "col-md-4">
                            <div className= "skills-show">
                                <div className= "skills-descrip">
                                    <img src = {require('../Images/Icons/unity_icon.jpg')} alt = "unity icon" className = "skills-icon"/>
                                </div>

                                <div className= "description-skills">
                                    <p className= "skills-para">
                                        ext ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not only five
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className= "col-md-4">
                            <div className= "skills-show">
                                <div className= "skills-descrip">
                                    <img src = {require('../Images/Icons/design_icon.png')} alt = "design icon" className = "skills-icon"/>
                                </div>

                                <div className= "description-skills">
                                    <p className= "skills-para">
                                        ext ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not only five
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;
