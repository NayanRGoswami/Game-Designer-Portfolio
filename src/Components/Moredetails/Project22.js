import React from 'react';
import AOS from 'aos';
import Sketchfab from 'sketchfab';
import $ from 'jquery';

import {Link} from 'react-router-dom';

import '../../Style/Portfolio.css';

class Project22 extends React.Component {

    componentDidMount() {



        initializeSketchFab();

        function initializeSketchFab() {
            const version = '6.4.1'
            const iframe = document.getElementById('api-frame')
            const client = new window.Sketchfab(version, iframe)

            client.init(
                "https://sketchfab.com/3d-models/3m-proj-04-vijoy-26e2a65b87a74c5bb755c571f66e2c9c",
                {
                    success: (api) => {
                        api.load()
                        api.start()
                        this.setSketchFab(api)
                        this.apiEventListeners()
                    },
                    error: function onError() {
                        console.log('Viewer error')
                    }
                }
            )
        }
    }

    render(){

        return(
            <div className= "portfolio-panel" id = "portfolio">
                <div className= "container">
                    <div className= "orange-stripe"></div>
                    <h1 className= "portfolio-heading">Portfolio</h1>
                    <h5 className= "my-work">My Work</h5>
                </div>

                <div className= "container project-model">
                    <iframe src="" id="api-frame" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            width="100%" height="600px"></iframe>
                </div>

                <div className= "container">
                    <div className= "row about-projects">
                        <div className= "col-md-6">
                            <h2 className= "project-heading">About Project</h2>
                            <p className= "project-information">
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin
                            </p>
                        </div>

                        <div className= "col-md-6">
                            <h2 className= "project-heading">Used</h2>
                            <p className= "project-information">
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                7.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project22;
