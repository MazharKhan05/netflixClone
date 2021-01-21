import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
	const [movie, setMovie] = useState([]);
	//This above state is used to display random movie at top in header
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			const rand = Math.floor(Math.random() * request.data.results.length);
			setMovie(request.data.results[rand]);
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substring(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="banner"
			style={{
				/* ? after movie called as optional chaining is used for preventing the app from freaking out whenever that bckimg is not available.*/
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			{/* banner header to handle background img */}
			<div className="banner__contents">
				{/* banner__contents to handle main inner contents like title... */}

				<h1 className="banner__title">
					{movie?.original_name || movie?.title || movie?.name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			{/* add the below div to give like a fade effect to app.. */}
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
