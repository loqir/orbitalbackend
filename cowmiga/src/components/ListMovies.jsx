import React, {useState, useEffect} from "react";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "../lib/init-firebase";

export default function ListMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])
    
    function getMovies() {
        const movieCollectionRef = collection(db, 'movies')
        getDocs(movieCollectionRef)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))

    }

    return (
        <div>
            <h4>ListMovies</h4>
        </div>
    )
}