import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx'



const Playground = () => {

const LightboxContent = () => {
    return (
    <div> Content to put in the Lightbox.</div>
    );
}

    return (
        <PlaygroundStyled className='Playground'>
            <h2>Playground</h2>
            <Lightbox LightboxContent ={LightboxContent}>
            My Content
            </Lightbox>
        </PlaygroundStyled>
    );
}

export default Playground;

const PlaygroundStyled = styled.div`
    
`;