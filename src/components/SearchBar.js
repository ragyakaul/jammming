import React, { useState } from 'react';
import { songs } from '../data.js';


export default function SearchBar(){
    const [query, setQuery] = useState('');

    function handleChange(e){
        const q = setQuery(e.target.value);

        console.log(songs.name.includes(q));

    }

    return (
        <>
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
        </>
    )
}
