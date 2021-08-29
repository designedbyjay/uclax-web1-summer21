import { createContext } from 'react';
export default createContext();

const actionTypes ={
    UF_UPDATE_CONTROL: 'UF: updateControl', 
}


/*Actions - Action creators*/

export const updateControl = (id, value, dispatch, state) => {

    let newState = {...state };

    newState = updateControls (id, value, newState);

//Validating fields

    dispatch ({
        type: actionTypes.UF_UPDATE_CONTROL,
        newState: newState,
    });
}

const updateControls = (id, value, currentState) => {
    const newControls = currentState.controls.map((stateControl) => {
        if (stateControl.id === id) {
            stateControl.value = value;
    }
    return stateControl;
});

return {
    ...currentState,
    controls: newControls,
    }
}



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