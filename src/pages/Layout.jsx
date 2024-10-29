import React, { useState } from 'react';
import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';
import TopNavbar from '../components/TopBar';

const Layout = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	return (
		<div className="flex bg-gray-100 dark:bg-gray-600 dark:text-gray-100 relative sm:relative md:static">
			<SideBar sideBarStatus={sideBarOpen} toggleSideBar={setSideBarOpen} />
			<div className="size-full h-screen">
				<TopNavbar sideBarStatus={sideBarOpen} toggleSideBar={setSideBarOpen} />
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
