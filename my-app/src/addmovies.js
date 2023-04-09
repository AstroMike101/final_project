import React, { useState } from 'react';
import {dataref} from './firebase';

function AddMovies()
{
	const [movie_name,setMovie_Name]=useState('')
	const [movie_category,setMovie_Category]=useState('')
	const [movie_cast,setMovie_Cast]=useState('')
	const [movie_director,setMovie_Director]=useState('')
	const [movie_producer,setMovie_Producer]=useState('')
	const [movie_synopsis,setMovie_Synopsis]=useState('')
	const [movie_score,setMovie_Score]=useState('')
	const [movie_rating_code,setMovie_Rating_Code]=useState('')
	const [movie_dates,setMovie_Dates]=useState('')
	const [movie_times,setMovie_Times]=useState('')

	const handleAdd=() => {
		dataref.ref("movies").set({
			movie_name: movie_name,
			movie_category: movie_category,
			movie_cast: movie_cast,
			movie_director: movie_director,
			movie_producer: movie_producer,
			movie_synopsis: movie_synopsis,
			movie_score: movie_score,
			movie_rating_code: movie_rating_code,
			movie_dates: movie_dates,
			movie_times: movie_times,
		}).catch(alert);
	}
	return(
		<div>
			<input value={movie_name} onChange{...(e) => {setMovie_Name(e.target.value)}}></input>
			<br/>
			<input value={movie_category} onChange{...(e) => {setMovie_Category(e.target.value)}}></input>
			<br/>
			<input value={movie_cast} onChange{...(e) => {setMovie_Cast(e.target.value)}}></input>
			<br/>
			<input value={movie_director} onChange{...(e) => {setMovie_Director(e.target.value)}}></input>
			<br/>
			<input value={movie_producer} onChange{...(e) => {setMovie_Producer(e.target.value)}}></input>
			<br/>
			<input value={movie_synopsis} onChange{...(e) => {setMovie_Synopsis(e.target.value)}}></input>
			<br/>
			<input value={movie_score} onChange{...(e) => {setMovie_Score(e.target.value)}}></input>
			<br/>
			<input value={movie_rating_code} onChange{...(e) => {setMovie_Rating_Code(e.target.value)}}></input>
			<br/>
			<input value={movie_dates} onChange{...(e) => {setMovie_Dates(e.target.value)}}></input>
			<br/>
			<input value={movie_times} onChange{...(e) => {setMovie_Times(e.target.value)}}></input>
			<br/>
			<button onClick={handleAdd}>Add Movies</button>
		</div>
	)
}
export default AddMovies

                    