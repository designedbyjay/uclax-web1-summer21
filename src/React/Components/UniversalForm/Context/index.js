import { createContext } from 'react';
export default createContext();

const actionTypes ={
    UF_UPDATE_CONTROL: 'UF: updateControl', 
}

import {actionTypes} from './actionTypes.js';


/*State Updater (reducer)*/

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