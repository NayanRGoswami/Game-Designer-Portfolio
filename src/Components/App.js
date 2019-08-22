import React from 'react';
import {Router, Route, Redirect} from 'react-router';
import { createBrowserHistory } from 'history';

import '../Style/Sidebar.css';
import Sidebar from "./Sidebar";
import Project1 from "./Moredetails/Project1";
import Project2 from "./Moredetails/Project2";
import Project3 from "./Moredetails/Project3";
import Project4 from "./Moredetails/Project4";
import Project5 from "./Moredetails/Project5";
import Project6 from "./Moredetails/Project6";
import Project7 from "./Moredetails/Project7";
import Project8 from "./Moredetails/Project8";

class App extends React.Component {
   render(){
       return(
           <Router history={createBrowserHistory()} >
               <Redirect from="/" to="/home" />
               <Route path = {"/home"} component = {Sidebar}/>
               <Route path = {"/project1"} component = {Project1}/>
               <Route path = {"/project2"} component = {Project2}/>
               <Route path = {"/project3"} component = {Project3}/>
               <Route path = {"/project4"} component = {Project4}/>
               <Route path = {"/project5"} component = {Project5}/>
               <Route path = {"/project6"} component = {Project6}/>
               <Route path = {"/project7"} component = {Project7}/>
               <Route path = {"/project8"} component = {Project8}/>
           </Router>
       )
   }
}

export default App;
