import React, { useContext } from 'react';
import styled from 'styled-components';

import Context, {updateControl} from '../../../../../../index.js/index.js'

const Input = () => {

    const Input = () => {
      const {dispatch, state} = useContext (Context); 
      
      const {
          fullname
      } = state;
      
      
      console.log('fullname', fullname);


    const handleUpdate = (e) => {
        dispatch(updateControl({
            fullname: e.target.value
        }));
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