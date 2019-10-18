import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobilehome from "./Mobile/Mobilehome";

import '../Style/Home.css';



class Home extends React.Component {

    componentDidMount() {

        const MainWord = document.querySelector('.jump');
        const text = MainWord.textContent;
        const jumpLettersArray = [...text]
        const getLetterHTML = jumpLettersArray.map(letter => `<span>${letter}</span>`).join('')
        MainWord.innerHTML = getLetterHTML;
    }

    render(){

        return(
           <div>
               <Mobilehome/>
               <div className="content-wrapper" id = "home">
                   <div className="content">
                       <img className= "banner-top" src= {require('../Images/top-bg-2.jpg')} alt="Gaming console"/>
                   </div>

                   <div className= "address-bar">
                       <div className= "row address-row">
                           <div className= "col-md-4">
                                      <p className= "address-bar-p"> <i className="map pin icon"></i> Unit- 24, 577 Third St,</p>
                                       <p className= "address-bar-p">London, Ontario, N5V4B9</p>
                           </div>
                           <div className= "col-md-4">
                               <p className= "address-bar-p"><i className="phone icon"></i> (226)889-0082</p>
                               <p className= "address-bar-p">Mon-Fri 7:00am - 10:00pm</p>
                           </div>
                           <div className= "col-md-4">
                               <p className= "address-bar-p"><i className= "envelope icon"></i> vijoy_george@gmail.com</p>
                               <p className= "address-bar-p">Reply in 24 Hours</p>
                           </div>
                       </div>
                   </div>

                   <div className= "introducton-panel">

                       <div className= "avatar-div">
                           <img className= "avatar" src= {require('../Images/avatar.jpg')} alt="Avatar"/>
                       </div>

                       <h1 className = "panel-name">Vijoyanto George</h1>
                       <h2 className= "profession jump">Game  Artist</h2>

                       <p className= "p-info"><strong>Born :</strong> May 3, 1990</p>
                       <p className= "p-info"><strong>Email :</strong> vijoy_george@gmail.com</p>
                       <p className= "p-info"><strong>Mobile :</strong> (226)000-5555</p>

                       <div className= "social-media-icons">
                           <ul className= 'social-media-icons-ui'>
                               <li className= "social-media-icons-li"><a href="#" className="fa"><i className="envelope icon main-icon"></i></a></li>
                               <li className= "social-media-icons-li"><a href="#" className="fa"><i className="linkedin alternate icon main-icon"></i></a></li>
                               <li className= "social-media-icons-li"><a href="#" className="fa"><i className="facebook f icon main-icon"></i></a></li>
                               <li className= "social-media-icons-li"><a href="#" className="fa"><i className="instagram icon main-icon"></i></a></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Home;
