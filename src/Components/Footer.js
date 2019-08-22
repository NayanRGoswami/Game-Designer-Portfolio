import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import $ from 'jquery';

import '../Style/Footer.css';


class Footer extends React.Component {

    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }

    render(){

        return(
            <div className= "footer">
                <div className= "main-footer">
                    <p className= "footer-text">
                        &copy;All Rights Reserved . Vijoyanto George
                    </p>
                    <p className= "footer-text-2">
                        Designed by <a href ="http://www.nayangoswami.org">Nayan Goswami</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;
