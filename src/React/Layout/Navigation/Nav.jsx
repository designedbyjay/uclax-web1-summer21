import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


import { mediaQueries } from 'common/mediaQueries/mediaQueries';


const Nav = () => {
return (

 <NavStyled>
     <NavLink to="/" exact>Welcome</NavLink>
     <NavLink to="services">Services</NavLink>
     <NavLink to="/contact">Contact</NavLink>
     <NavLink to="/login">Login</NavLink>
     <NavLink to="/homework">Homework</NavLink>
</NavStyled>
 )
}

export default Nav; 

const NavStyled = styled.nav `
    background-color:#e1daa8;
    padding:10px;
    text-align: center;

a{
    display: block;
    border-radius: 2px;
    background-color:teal;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 0px 10px;

    text-decoration: none;


    &:hover {
        color: black;
        background-color: grey;
    }
    
    &.active{
        background-color: teal;
        font-weight: bold;
    }

}
@media ${mediaQueries.mdUp}{
    a {
        display:inline-block;
        margin: 0px 10px;
        font-size: 16px;
        border-radius: 5px;
    }
}

`;
