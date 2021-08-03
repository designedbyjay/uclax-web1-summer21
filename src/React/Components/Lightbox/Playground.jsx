import React from 'react';
import styled from 'styled-components';

import Lightbox from './Lightbox.jsx';

const Playground = () => {

    return (
        <PlaygroundStyled className='Playground'>
            <Lightbox />
        </PlaygroundStyled>
    );
}

export default Playground;

const PlaygroundStyled = styled.div`
    
`;