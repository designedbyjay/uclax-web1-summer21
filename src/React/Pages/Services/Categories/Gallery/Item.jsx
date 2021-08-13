import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx';
import { servicesData } from '../../servicesData';


const Item = ({service, title, description, cost}) => {


    const LightboxContent =() => {
        return (
            <div>    
           <img src={service.image} alt={service.name} />
           <h1>{service.description}</h1>
           <p>{service.description}</p>
           <p>{service.cost}</p>
            </div>
        );
    }


    return (
        <ItemStyled className='Item'>
         <Lightbox LightboxContent={LightboxContent}>
         <img src={service.image} alt={service.title} />
         <h3>{service.title}</h3>
            {/* <h1>{service.title}</h1> */}
            <p>{service.description}</p>
            <p>${service.cost}</p>
         </Lightbox>
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