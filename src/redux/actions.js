import axios from "axios";

export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const fetchJokeRequest = () => {
    return {
        type: FETCH_JOKE_REQUEST
    };
};

export const fetchJokeSuccess = (joke) => {
    return {
        type: FETCH_JOKE_SUCCESS,
        payload: joke
    };
};

export const fetchJokeFailure = (error) => {
    return {
        type:FETCH_JOKE_FAILURE,
        payload: error
    };
};

export const fetchJoke = () => {
    return (dispatch) => {
        dispatch(fetchJokeRequest());
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            const joke = response.data.setup +  ' ' + response.data.punchline;
            dispatch(fetchJokeSuccess(joke));
        })
        .catch(error => {
            dispatch(fetchJokeFailure(error.message));
        });
    };
};