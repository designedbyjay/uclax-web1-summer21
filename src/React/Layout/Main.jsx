import React from 'react';
import styled from 'styled-components'

import Homework from'../Homework/Homework.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Main = () => {
    return  (
        <MainStyled>
            <h1>The main content</h1>
            <SunAndMoon />
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
