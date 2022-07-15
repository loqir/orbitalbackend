import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import { useEffect } from 'react'


export default function List() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        console.log(movies)
    }, [movies])

    function getMovies() {
        const listRef = collection(db, 'movies')
        getDocs(listRef).then(response => {
            const movies = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id(),
            }))
            setMovies(movies)

        }).catch(error => console.log(error.message))
    }
    return (
        <div>
            <h4>List</h4>
            <button onClick={() => getMovies()}>Refresh movies</button>
            <ul>
                {movies.map(movie => (<li key={movie.id}>{movies.data.name}</li>))}
            </ul>

        </div>
    )
}