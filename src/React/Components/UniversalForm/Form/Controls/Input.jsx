import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../Context/index.js'

const Input = () => {

    const Input = () => {
      const {dispatch, state} = useContext (Context); 
      
      const {
          fullname
      } = state;
      
      
      console.log('fullname', fullname);


    const handleUpdate = (e) => {
        console.log(e.target.value)
    }

    return (
        <InputStyled 
        className='Input'
        type='text'
        id='first'
        value={ inputName }
        onChange={handleUpdate} 
        />
    );
}

export default Input;

const InputStyled = styled.input`
    
`;