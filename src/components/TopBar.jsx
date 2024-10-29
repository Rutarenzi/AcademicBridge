import React from 'react';
import {
	IoSearch,
	IoNotificationsOutline,
	IoMenu,
	IoPersonOutline,
} from 'react-icons/io5';
import ThemeToggle from './ThemeToggle';

// eslint-disable-next-line react/prop-types
const TopNavbar = ({ toggleSideBar, sideBarStatus }) => {
	return (
		<nav className="flex items-center justify-between bg-white p-2 dark:bg-gray-800 dark:text-gray-100">
			<div className="sm:hidden">
				<button onClick={() => toggleSideBar(!sideBarStatus)} aria-label="Menu">
					<IoMenu className="text-2xl" />
				</button>
			</div>

			<div className="flex-grow mx-6 max-w-md  p-2 rounded-lg">
				{' '}
				<div className="flex items-center  relative  ">
					<input
						type="text"
						placeholder="Search..."
						className="w-full p-2 pr-11 rounded-lg focus:outline-none focus:ring-0 bg-gray-100" // Ensure input matches background
					/>
					<IoSearch className="right-3 text-2xl absolute text-gray-400" />{' '}
				</div>
			</div>
			<div className="flex relative items-center space-x-4">
				<ThemeToggle />
				<button aria-label="Notifications">
					<IoNotificationsOutline className="text-xl" />
					<span className="top-0 left-13 absolute w-3 h-3 bg-red-800 border-2 border-white rounded-full"></span>
				</button>

				<button aria-label="Profile">
					<IoPersonOutline className="text-xl" />
				</button>
			</div>
		</nav>
	);
};

export default TopNavbar;
