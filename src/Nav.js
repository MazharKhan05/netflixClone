import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);
	// in order to add an effect to nav-bar attach a scroll-Listener so that when scroll is recognized this effect will take place.
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});

		//Before useeffect disappears just remove the Listener attached before.
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/logo.png"
				alt="Logo"
			/>

			<img
				className="nav__avatar"
				src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/profile__logo.png"
				alt="Logo"
			/>
		</div>
	);
}

export default Nav;
