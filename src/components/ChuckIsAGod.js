import React from 'react';
import {useSelector} from 'react-redux';

const ChuckIsAGod = () => {
    //const state
    const {loading, chuck} = useSelector(state => state);

return (
    <h1>
        {loading ? 'Loading joke...' : chuck}
    </h1>
);
}

export default ChuckIsAGod;