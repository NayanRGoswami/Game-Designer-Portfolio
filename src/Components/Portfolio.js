import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {Link} from 'react-router-dom';

import '../Style/Portfolio.css';

class Portfolio extends React.Component {

    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }


    render(){

        return(
          <div className= "portfolio-panel" id = "portfolio">
              <div className= "container">
                  <div className= "orange-stripe"></div>
                  <h1 className= "portfolio-heading" >Portfolio</h1>
                  <h5 className= "my-work">My Work</h5>
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

              <div className= "project-grid container" data-aos='fade-up'>
                  <div className= "row">
                      <div className= "col-md-3">
                          <div className="flip-card">
                          <div className="flip-card-inner">
                              <div className="flip-card-front">
                        <Link to = {"./project1"}><img src = {require('../Images/Projects/project1.jpg')} alt = "Project 1" className = "project"/></Link>
                              </div>
                              <Link to={"./project1"}>
                              <div className="flip-card-back">
                                  <h1>John Doe</h1>
                                  <p>Architect & Engineer</p>
                                  <p>We love that guy</p>
                              </div>
                              </Link>
                          </div>
                          </div>
                      </div>


                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                      <Link to={"./project1"}><img src = {require('../Images/Projects/project3.jpg')} alt = "Project 2" className = "project"/></Link>
                                  </div>
                                  <Link to={"./project2"}>
                                  <div className="flip-card-back">
                                      <h1>John Doe</h1>
                                      <p>Architect & Engineer</p>
                                      <p>We love that guy</p>
                                  </div>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                          <a href = ""><img src = {require('../Images/Projects/project2.jpg')} alt = "Project 1" className = "project"/></a>
                                  </div>
                                  <Link to={"./project3"}>
                                      <div className="flip-card-back">
                                          <h1>John Doe</h1>
                                          <p>Architect & Engineer</p>
                                          <p>We love that guy</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                          <a href = ""><img src = {require('../Images/Projects/project1.jpg')} alt = "Project 1" className = "project"/></a>
                                  </div>
                                  <Link to={"./project4"}>
                                      <div className="flip-card-back">
                                          <h1>John Doe</h1>
                                          <p>Architect & Engineer</p>
                                          <p>We love that guy</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className= "row">
                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                          <a href = ""><img src = {require('../Images/Projects/project3.jpg')} alt = "Project 1" className = "project"/></a>
                                  </div>
                                  <Link to={"./project5"}>
                                      <div className="flip-card-back">
                                          <h1>John Doe</h1>
                                          <p>Architect & Engineer</p>
                                          <p>We love that guy</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                          <a href = ""><img src = {require('../Images/Projects/project2.jpg')} alt = "Project 1" className = "project"/></a>
                                  </div>
                                  <Link to={"./project6"}>
                                      <div className="flip-card-back">
                                          <h1>John Doe</h1>
                                          <p>Architect & Engineer</p>
                                          <p>We love that guy</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                          <a href = ""><img src = {require('../Images/Projects/project3.jpg')} alt = "Project 1" className = "project"/></a>
                                  </div>
                                  <Link to={"./project7"}>
                                      <div className="flip-card-back">
                                          <h1>John Doe</h1>
                                          <p>Architect & Engineer</p>
                                          <p>We love that guy</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className= "col-md-3">
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                          <a href = ""><img src = {require('../Images/Projects/project1.jpg')} alt = "Project 1" className = "project"/></a>
                                  </div>
                                  <Link to={"./project8"}>
                                      <div className="flip-card-back">
                                          <h1>John Doe</h1>
                                          <p>Architect & Engineer</p>
                                          <p>We love that guy</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Portfolio;
