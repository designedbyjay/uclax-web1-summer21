import React from 'react';
import styled from 'styled-components';

const FormMessage = ({control}) => {

    const message = control.validation.message;

    console.log('control.validation', control.validation);

    if (message.length < 1){ return ''}

    return (
        <FormMessageStyled className='FormMessage'>
            {message}
        </FormMessageStyled>
    );
}

export default FormMessage;

const FormMessageStyled = styled.div`

color: red;
padding: 5px 0px;
    
`;