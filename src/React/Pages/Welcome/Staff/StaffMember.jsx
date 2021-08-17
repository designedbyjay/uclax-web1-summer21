import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx';



const StaffMember = ({member}) => {

    const LightboxContent =() => {
        return (
            <div>    
            <img src={member.image} alt={member.name} />
            <h3>⭐️{member.name} ⭐️</h3>
            </div>
        );
    }

    return (
       
        <StaffMemberStyled className='StaffMember'>
            <Lightbox LightboxContent={LightboxContent} width={'300px'}>
                <img src={member.image} alt={member.name} />
                <h3>⭐️ {member.name} ⭐️</h3>
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    img {
        display: block;
        width:100%;
    }
    h3{
        margin: 0px;
        color: white;
        font-family:Open 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, sans-serif;
        font-size:21px;
        background-color:maroon;
        filter: drop-shadow(0 0 0.25rem crimson);
        padding: 5px;
    }
`;