import React from 'react';
import styled from 'styled-components';

import Item from './Item.jsx';

const Gallery = () => {

    return (
        <GalleryStyled className='Gallery'>
           <Item /> 
           <Item /> 
           <Item /> 
           <Item /> 
           
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
`;