import React from 'react';
import styled from 'styled-components';

const Item = ({service}) => {

    return (
        <ItemStyled className='Item'>
         <img src={service.image} alt={service.title} />
         <h3>{service.title}</h3>

        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    
    
    img{
        width: 100%;
        display:block;
        border: 13px teal solid;
    }

    h3{
        background-color: teal;
        color: white;
        padding: 5px 0px 20px 12px;
        
        font-size: 18px;
        margin: 0px;
    }
`;