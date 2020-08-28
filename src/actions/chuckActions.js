import axios from 'axios';

export const FETCH_CHUCKY_START = "FETCH_CHUCKY_START";
export const FETCH_CHUCKY_SUCCESS = "FETCH_CHUCKY_SUCCESS";
export const FETCH_CHUCKY_FAILURE = "FETCH_CHUCKY_FAILURE";

export const fetchChuckJoke = () => dispatch => {
    dispatch({ type: FETCH_CHUCKY_START })
    axios
        .get('http://api.icndb.com/jokes/random')
        .then(response => {
            //console.log("response data from FCS", response.data.value.joke);
            dispatch({type: FETCH_CHUCKY_SUCCESS, payload: response.data.value.joke})
        })
        .catch(error => {
            //console.log("error", console.log("error", error.data));
            dispatch({ type: FETCH_CHUCKY_FAILURE, payload: error.message})
})
}