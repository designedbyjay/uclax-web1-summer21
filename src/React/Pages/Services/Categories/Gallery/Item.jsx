import React from 'react';
import styled from 'styled-components';

const Item = () => {

    return (
        <ItemStyled className='Item'>
         <img src="/img/Services/service-1.jpg" alt="whatever"/> 
         <h3>Title</h3>

        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img{
        border: 13px teal solid;
        padding-bottom: 70px;
    }
`;