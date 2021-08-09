import React, { useEffect } from 'react';
import styled from 'styled-components';

import Light from './Light.jsx';
const Dark = ({showLightUpdate, children}) => {

    useEffect(() => {
        const handOnKeyDown = (event) => {
        console.log('KeyCode', event.keyCode);

        if(event.keyCode === 27){
            showLightUpdate(false);
        }

        }

        document.addEventListener('keydown', handOnKeyDown, false);
    }, []);

    return() => {
        document.removeEventListener("keydown", handOnKeyDown, false);
    }

    return (
        <DarkStyled className='Dark'>
            <Light showLightUpdate={showLightUpdate}>
                {children}
                </Light>
        </DarkStyled>
    );
}

export default Dark;

const DarkStyled = styled.div`
    position: fixed;
    background-color:rgba(0,0,0, 0.7222);

    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
`;