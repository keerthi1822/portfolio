import React from 'react'
import {
    browserRouter, Route, Switch
} from 'react-router-dom';
import AboutMe from './components/aboutme/AboutMe';

import LandingPage from './LandingPage';
import AboutMe from './components/aboutme/AboutMe';


const Router = () => {
    return (
        <div>
            
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='/Education' element={<Education />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/downloads' element={<Downloads />} />
                </Routes>
          

        </div>
    )
}

export default Router