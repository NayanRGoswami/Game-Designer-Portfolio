import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import $ from 'jquery';

import '../Style/Contact.css';
import Footer from "./Footer";


class Contact extends React.Component {

    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }

    render(){

        return(
            <div>
            <div id = "contact" className= "contact-panel">
                <div className= "container">
                   <div className= "orange-stripe"></div>
                   <h1 className= "portfolio-heading">Contact Me!</h1>
                   <h5 className= "my-work">Let's Keep In Touch</h5>
                </div>

                <div className= "container">
                    <div className= "row">
                        <div className= "col-md-8 centered">
                            <p className= "project-para">
                                dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                            </p>
                            <div className= "green-stripe middle">
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "container">
                    <div className= "row">
                        <div className= "col-md-4 contact-section">
                            <h1 className= "contact-section-logo"><i className="map pin icon"></i></h1>
                            <p>577, Third street, Unit- 24, London, Ontario</p>
                        </div>

                       <div className= "col-md-4 contact-section">
                           <a href= "mailto:vijoy@mail.com"> <h1 className= "contact-section-logo"><i className="envelope icon"></i></h1>
                            <p>vijoy_george@gmail.com</p></a>
                        </div>

                        <div className= "col-md-4 contact-section">
                            <h1 className= "contact-section-logo"><i className="phone icon"></i></h1>
                            <p>999-488-7100</p>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;
