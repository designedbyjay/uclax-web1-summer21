import React from 'react';
import styled from 'styled-components'

const Header = () => {
return (
    <HeaderStyled> 
        <h2>Spa Canctuary</h2>  
        <h3>A SPA for every ocassion</h3>
    </HeaderStyled>
    )
}

export default Header; 

const HeaderStyled = styled.header`
background-color: #b9b482;
padding: 20px;
color: white;
text-align: center;
`;

