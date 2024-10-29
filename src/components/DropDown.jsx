import React, { useState } from 'react';
import { IoMdMore } from 'react-icons/io';

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					onClick={toggleDropdown}
					className="flex items-center justify-center w-8 h-8 focus:outline-none"
					aria-expanded={isOpen}
				>
					<IoMdMore className="size-5" />
				</button>
			</div>
			{isOpen && (
				<div className="absolute right-0 z-10 w-32 mt-1 bg-white dark:bg-gray-700   rounded-md shadow-lg">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<a href="#" className="block px-4 py-2 text-sm" role="menuitem">
							Completed
						</a>
						<a href="#" className="block px-4 py-2 text-sm" role="menuitem">
							To do
						</a>
						<a href="#" className="block px-4 py-2 text-sm" role="menuitem">
							In progress
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
