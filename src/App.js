import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchChuckJoke} from './actions/chuckActions';
import ChuckIsAGod from './components/ChuckIsAGod';

function App() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);
  
  useEffect(() => {
    dispatch(fetchChuckJoke())
  }, [])
  return (
    <div>
      <img src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2012/01/chuck-norris-thumb.jpg' alt='Chuck Norris' />
      <ChuckIsAGod />
      <button onClick={() => dispatch(fetchChuckJoke())} >More Norris Goodness</button>
      {errors ?  <p>{errors}</p> : <></>}
    </div>
  );
}

export default App;
