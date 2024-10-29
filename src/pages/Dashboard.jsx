import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'; // Importing icons
import { GiPadlockOpen } from 'react-icons/gi';
import { Users } from '../constants/LinkConstant';
import { CiCirclePlus } from 'react-icons/ci';
import { CiGrid41 } from 'react-icons/ci';
import { CiGrid2H } from 'react-icons/ci';
import InsideNav from '../components/InsideNav';

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="h-screen dark:bg-gray-600 dark:text-gray-100">
			<div className="p-4">
				<nav className="flex justify-between items-center">
					<ul className="flex space-x-4 w-full sm:w-1/2 md:w-auto">
						<li>
							<a href="#" className="opacity-40">
								Workspace
							</a>
						</li>
						<span className="text-gray-600 dark:text-gray-300">&gt;</span>
						<li>
							<a href="#" className="opacity-40">
								Creative
							</a>
						</li>
						<span className="text-gray-600 dark:text-gray-300">&gt;</span>
						<li>
							<a href="#" className="font-bold">
								Creative Website
							</a>
						</li>
					</ul>

					<div className="hidden sm:flex flex-col items-end">
						<h1 className="font-bold">From 23 April</h1>
						<p className="opacity-40 flex items-center">
							<span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
							Updated 12 min ago
						</p>
					</div>
				</nav>
			</div>
			<h1 className="text-5xl p-4 font-bold text-gray-800 dark:text-white">
				Dashboard
			</h1>

			<div className="flex justify-between p-4">
				<div className="flex items-center">
					<div className="relative">
						<div
							className="cursor-pointer border-r border-gray-400 px-3 mb-1 flex items-center"
							onClick={toggleDropdown}
						>
							<GiPadlockOpen className="mr-2 opacity-50" />
							<span className="font-medium text-gray-800 dark:text-gray-100">
								Limited Access
							</span>
							<span
								className={`ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
							>
								{isOpen ? <FaAngleUp /> : <FaAngleDown />}
							</span>
						</div>
						{isOpen && (
							<ul className="absolute bg-white left-4 dark:bg-gray-800  rounded-md w-40 z-10">
								<li>
									<Link
										className="font-medium text-sm  flex items-center py-1 px-3"
										to="/settings"
										onClick={() => setIsOpen(false)}
									>
										Settings
									</Link>
								</li>
								<li>
									<Link
										className="font-medium text-sm  flex items-center py-1 px-3 "
										to="/signin"
										onClick={() => setIsOpen(false)}
									>
										Sign Out
									</Link>
								</li>
							</ul>
						)}
					</div>
					<div>
						<div className="flex -space-x-2 overflow-hidden p-1 ml-3">
							{Users.slice(0, 3).map((User, index) => (
								<img
									key={index}
									className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
									src={User.photo}
									alt=""
								/>
							))}
							<div className="relative flex-shrink-0">
								<span
									className="inline-block h-8 w-8 rounded-full ring-2 
                            bg-gray-200 object-cover ring-white dark:bg-gray-400 text-center"
								>
									+2
								</span>
							</div>
						</div>
					</div>
					<div className="ml-3">
						<CiCirclePlus className="w-10 h-10 border-none rounded-full bg-purple-500 text-gray-200" />
					</div>
				</div>
				<div className="flex justify-between w-20 items-center">
					<div className="relative group inline-block">
						<div className="flex items-center justify-center">
							<svg
								className="h-6 w-6 cursor-pointer"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
								<line x1="8" y1="12" x2="16" y2="12" />
							</svg>
						</div>
						{/* Tooltip */}
						<div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-white bg-purple-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							Copy Link
						</div>
					</div>
					<CiGrid2H className="h-6 w-6 text-white bg-purple-700" />
					<CiGrid41 className="h-6 w-6" />
				</div>
			</div>
			<InsideNav />
		</div>
	);
};

export default Dashboard;
