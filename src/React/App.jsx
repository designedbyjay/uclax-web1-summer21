import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import style from 'styled-components'

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';
import { MediaQueryProvider } from 'common/mediaQueries/useMediaQuery.js';



const App = () => {
    return (
    <MediaQueryProvider>
        <BrowserRouter>
   
                <Header />
                <Nav />
                <Main />
                <Footer />
         
        </BrowserRouter>
    </MediaQueryProvider>
    );
}

export default App;
