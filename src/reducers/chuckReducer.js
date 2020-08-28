import {FETCH_CHUCKY_START, FETCH_CHUCKY_SUCCESS, FETCH_CHUCKY_FAILURE} from '../actions/chuckActions';


export const initialState = {
    loading: false,
    errors: [],
    chuck: ''
}

export const chuckReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_CHUCKY_START:
            return {
                ...state, 
                loading: true
            }
            case FETCH_CHUCKY_SUCCESS:
            return {
                ...state, 
                loading: false,
                chuck: action.payload,
                errors: []
            }
            case FETCH_CHUCKY_FAILURE:
            return {
                ...state, 
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}