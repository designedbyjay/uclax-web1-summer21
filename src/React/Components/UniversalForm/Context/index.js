import {createContext} from 'react';
export default createContext();

const actionTypes ={
    UF_UPDATE_CONTROL: 'UF: updateControl', 
}



export const updateControl = (input) => {
    return {
        type: actionTypes.UF_UPDATE_CONTROL,
        input: input,
    }
}


export const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.UF_UPDATE_CONTROL:{
            return {
                ...state,
                ...action.input
            };
        }

default: {
    return {...state}
}

    }
}