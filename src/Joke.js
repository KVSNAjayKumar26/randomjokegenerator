import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJoke } from './redux/actions';
import './Joke.css';

const Joke = () => {
    const dispatch = useDispatch();
    const { loading, joke, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchJoke());
    }, [dispatch]);
  return (
    <div>
        <h1>Random Joke Generator</h1>
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{joke}</p>}
        <button onClick={() => dispatch(fetchJoke())}>Get Another Joke</button>
    </div>
  );
};

export default Joke