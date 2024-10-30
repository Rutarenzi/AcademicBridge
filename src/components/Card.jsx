import React from 'react';
import Badge from '../components/Badge';
import DropdownMenu from '../components/DropDown';
import { Users } from '../constants/LinkConstant';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import Photo from '../assets/photo-1.jpg';

// eslint-disable-next-line react/prop-types
const Card = ({ status, description }) => {
	return (
		<div
			className={`border-none rounded-2xl bg-white dark:bg-gray-800 
            px-4 pt-2 flex flex-col gap-4 items-center justify-center 
        ${!status ? 'row-span-2' : ''}`}
		>
			{!status && (
				<img
					src={Photo}
					alt={status ? 'Completed' : 'In Progress'}
					className="w-full h-[50%] object-cover rounded-lg mb-2"
				/>
			)}

			<div className="flex justify-between w-full">
				<Badge status={status} />
				<DropdownMenu />
			</div>
			<div className="w-full border-b border-gray-200 pb-4">
				<p className="opacity-60">{description}</p>
			</div>
			<div className="flex justify-between w-full">
				<div>
					<div className="flex -space-x-2 overflow-hidden p-1 ml-3">
						{Users.slice(0, 3).map((User, index) => (
							<img
								key={index}
								className="inline-block h-8 w-8 rounded-full object-cover"
								src={Photo}
								alt=""
							/>
						))}
					</div>
				</div>
				<div className="flex items-center">
					<IoChatbubbleEllipsesOutline className="text-xl" />
					<span className="ml-1 ">6</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
