import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../Style/Home.css';
import '../../Style/Mobile/Mobilehome.css';


class Mobilehome extends React.Component {

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
                <div className= "mobile-home" id = "portfolio">
                    <div className= "mobile-home-main">
                        <h1 className= "mobile-home-heading">Vijoyanto George</h1>
                        <div className= "mobile-avatar">
                            <img className= "mobile-avatar-image" src= {require('../../Images/avatar.jpg')} alt="Avatar"/>
                        </div>
                        <h2 className= "mobile-home-profession">Game Artist</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mobilehome;
