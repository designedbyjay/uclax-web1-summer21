import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
 
import Homework from'../Homework/Homework.jsx';

const Main = () => {
    return  (
        <MainStyled>
            <h1>The main content</h1>
        <Switch>
            <Route path='/services'>
                Services
            </Route>
            <Route path='/contact'>
                Contact
            </Route>
            <Route path='/login'>
                Login
            </Route>
            <Route path='/homework'>
               <Homework />
            </Route>
            <Route path='/' exact>
                Welcome
            </Route>

        </Switch>
            <Homework />
        </MainStyled>

        )
}

export default Main; 


const MainStyled = styled.main`
    background-color:#1a1a1a;
    color: grey;
    padding:50px;
    text-align: center;

`;
