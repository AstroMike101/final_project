import './index.css';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

function ManageMovies() {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ name: '', showtimes: '', description: '', date: '', duration: '' });

    const handleAddMovie = () => {
        setMovies([...movies, newMovie]);
        setNewMovie({ name: '', showtimes: '', description: '', date: '', duration: '' });
    };

    const handleRemoveMovie = (movie) => {
        const updatedMovies = movies.filter((m) => m !== movie);
        setMovies(updatedMovies);
    };

    return (
        <div className="manage-movies-container1">
            <NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink>
            <h1 className="manage-movies-header1">Manage movies</h1>
            <div className="add-movie-container1">
                <h2>Add movie</h2>
                <input type="text" placeholder="Name" className="movie-input1" value={newMovie.name} onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })} />
                <input type="text" placeholder="Showing times" className="movie-input1" value={newMovie.showtimes} onChange={(e) => setNewMovie({ ...newMovie, showtimes: e.target.value })} />
                <input type="text" placeholder="Description" className="movie-input1" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
                <input type="text" placeholder="Date" className="movie-input1" value={newMovie.date} onChange={(e) => setNewMovie({ ...newMovie, date: e.target.value })} />
                <input type="text" placeholder="Duration" className="movie-input1" value={newMovie.duration} onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })} />
                <button className="add-movie-button1" onClick={handleAddMovie}>Add</button>
            </div>
            <div className="remove-movie-container1">
                <h2>Remove movie</h2>
                {movies.map((movie, index) => (
                    <div className="movie-card1" key={index}>
                        <h3>{movie.name}</h3>
                        <p>{movie.showtimes}</p>
                        <p>{movie.description}</p>
                        <p>{movie.date}</p>
                        <p>{movie.duration}</p>
                        <button className="remove-movie-button1" onClick={() => handleRemoveMovie(movie)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageMovies;