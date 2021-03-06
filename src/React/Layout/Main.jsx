import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom'
 
import Welcome from'../Pages/Welcome/Welcome.jsx';
import Login from'../Pages/Login/Login.jsx';
import Contact from'../Pages/Contact/Contact.jsx';
import Services from'../Pages/Services/Services.jsx';
import Homework from'../Homework/Homework.jsx';

const Main = () => {
    return  (
        <MainStyled>
            <h1>The main content</h1>
        <Switch>
            <Route path='/services'>
                <Services />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            <Route path='/login'>
                < Login />
            </Route>
            <Route path='/homework'>
               <Homework />
            </Route>
            <Route path='/' exact>
               <Welcome />
            </Route>
        </Switch>
      
        </MainStyled>

        )
}

export default Main; 


const MainStyled = styled.main`
    background-color:#fff;
    padding:10px;


    div {
        /* border: solid 1px grey; */
        /* padding:20px; */
    }
`;
