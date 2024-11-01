import React from 'react';
import { IoMoon } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

const ThemeToggle = () => {
	const [dark, setDark] = React.useState(false);

	const darkModeHandler = () => {
		setDark(!dark);
		document.body.classList.toggle('dark');
	};

	return (
		<div className="bg-yellow-">
			<button onClick={() => darkModeHandler()}>
				{dark && <IoSunny />}
				{!dark && <IoMoon />}
			</button>
		</div>
	);
};

export default ThemeToggle;
