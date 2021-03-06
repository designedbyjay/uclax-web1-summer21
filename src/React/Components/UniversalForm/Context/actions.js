import { actionTypes } from './actionTypes.js';
import {isValidEmail} from 'common/utilities.js';

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const updateControl = (id, value, dispatch, state) => {

    let newState = { ...state };

    newState = updateControls(id, value, newState);
    newState = validateControls(newState);

    dispatch({
        type: actionTypes.UF_UPDATE_CONTROL,
        newState: newState,
    });
}

export const submitForm = (dispatch, state) => {
    let newState ={
    ...state,
    hasSubmitted:true,
}

    newState = validateControls(newState);
    newState = submitData(newState);

    dispatch({
        type: actionTypes.UF_SUBMIT_FORM,
        newState: newState,
    });
}

const submitData = (currentState) => {
    let response = 'Unable to post to server';
    let message = 'Testing 123';

// API call


    return {
        ...currentState,
        request: JSON.stringify(currentState.controls),
        response: response,
        message: message,
    }
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

    const validateControls = (currentState) => {
        const newControls = currentState.controls.map((stateControl) => {
                stateControl.validation.isValid = true;
                stateControl.validation.message = '';

                stateControl.validation.rules.forEach((rule) => {
                switch(rule) {
                    case 'required': {
                       if (stateControl.value.length < 1) {
                        stateControl.validation.isValid = false;
                        stateControl.validation.message = `You are missing the required field. ${stateControl.label} field`;
                       }
                        break;
                    }
                    case 'email': {
                        if (!isValidEmail(stateControl.value)) {
                         stateControl.validation.isValid = false;
                         stateControl.validation.message = `The ${stateControl.label} field fores not to be a valid email. `;
                        }
                         break;
                    }
                } 
     
           });
    
           return stateControl;

        });

        return {
            ...currentState,
            controls: newControls,
    }
}