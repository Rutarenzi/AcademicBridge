import React, { useState } from 'react';
import { links, Users } from '../constants/LinkConstant';
import { IoSettingsOutline, IoPersonOutline } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

//eslint-disable-next-line react/prop-types
const SideBar = ({ sideBarStatus, toggleSideBar }) => {
	const [open, setOpen] = useState(true);
	return (
		<div
			className={`${open ? 'w-64' : 'w-20'} ${sideBarStatus ? 'block' : 'hidden'} md:block duration-300 p-5 pt-8 bg-white h-screen border-r border-gray-200 dark:border-gray-500 overflow-hidden absolute sm:relative z-50 dark:bg-gray-800 dark:text-gray-100`}
		>
			{sideBarStatus && (
				<button
					className="absolute top-1 right-1 sm:hidden p-2 text-gray-600 dark:text-gray-100"
					onClick={() => {
						toggleSideBar(!sideBarStatus);
					}}
				>
					<IoClose size={24} />
				</button>
			)}

			<div
				className="flex gap-x-4 items-center mb-9"
				onClick={() => setOpen(!open)}
			>
				<span>
					<svg
						className="fill-violet-500"
						xmlns="http://www.w3.org/2000/svg"
						width={32}
						height={32}
					>
						<path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
					</svg>
				</span>
				<h1
					className={`origin-left duration-300 font-bold text-2xl ${!open && 'scale-0'}`}
				>
					ACADEMIC
				</h1>
			</div>
			<div className="border-b border-gray-200">
				<ul className="mb-6">
					{links.map((link, index) => (
						<li
							key={index}
							className={`flex items-center gap-x-4 cursor-pointer p-2 mt-1 
                            border-l-4 border-transparent hover:border-violet-500 active:border-violet-500 
                            origin-left duration-100`}
						>
							<span className="text-2xl">
								<link.icon />
							</span>
							<span className={`${!open && 'hidden'} origin-left duration-100`}>
								{link.name}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="border-b border-gray-200 flex-grow ">
				<ul className="mb-6 mt-9 space-y-2">
					{Users.slice(0, 3).map((User, index) => (
						<li
							key={index}
							className={`flex items-center gap-x-4 cursor-pointer p-2 origin-left duration-100`}
						>
							<div className="relative flex-shrink-0">
								<img
									className="w-8 h-8 rounded-full object-cover"
									src={User.photo}
									alt={User.name}
								/>
								{index < 2 && (
									<span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-700 border-2 border-white rounded-full"></span>
								)}
							</div>
							<span
								className={`${!open && 'hidden'} origin-left duration-100 text-sm sm:text-base`}
							>
								{User.name}
							</span>
						</li>
					))}
					<li
						className={`flex items-center gap-x-4 cursor-pointer p-2 origin-left duration-100`}
					>
						<div className="relative flex-shrink-0">
							<CiCirclePlus className="w-8 h-8 rounded-full" />
						</div>
						<span
							className={`${!open && 'hidden'} origin-left duration-100 text-sm sm:text-base`}
						>
							Add User
						</span>
					</li>
				</ul>
			</div>

			<div className="relative w-full">
				<ul className="mt-2">
					<li
						className={`flex items-center gap-x-4 cursor-pointer p-2 mt-1 
                        border-l-4 border-transparent hover:border-violet-500 active:border-violet-500 
                        origin-left duration-100`}
					>
						<span className="text-2xl">
							<IoSettingsOutline />
						</span>
						<span className={`${!open && 'hidden'} origin-left duration-100`}>
							Settings
						</span>
					</li>
					<li
						className={`flex items-center gap-x-4 cursor-pointer p-2 mt-1 
                        border-l-4 border-transparent hover:border-violet-500 active:border-violet-500 
                        origin-left duration-100`}
					>
						<span className="text-2xl">
							<IoPersonOutline />
						</span>
						<span className={`${!open && 'hidden'} origin-left duration-100`}>
							Profile
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
