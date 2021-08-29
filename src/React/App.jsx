import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header.jsx';
import Navigation from './Layout/Navigation/Navigation.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';
import { MediaQueryProvider } from 'common/mediaQueries/useMediaQuery.js';



const App = () => {
    return (
    <MediaQueryProvider>
        <BrowserRouter>
   
                <Header />
                <Navigation />
                <Main />
                <Footer />
         
        </BrowserRouter>
    </MediaQueryProvider>
    );
}

export default App;
