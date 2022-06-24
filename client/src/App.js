import React, { useState, useEffect, ReactDOM } from 'react';
import './App.css';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
// import grey from '@material-ui/core/colors/grey';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button'
// import SearchIcon from '@material-ui/icons/Search';
// import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
// import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CodeBox from './CodeBox'
import CodeBox2 from './CodeBox2'
import Login from './login'

export default function App() {
  useEffect(() => {
      // add the requirements when age needs to be updated/reloaded
      }, [])


return (
<Router> 
    <Routes>
        
         {/* <Route path="/search/:city">
         <Route path="/search">
            <WeatherContent/>
         </Route> */}

        <Route exact path="/login">
            <Login/>
        </Route>
        <Route path="/">
            <CodeBox/>
         </Route>
    </Routes>
</Router>

    );

}