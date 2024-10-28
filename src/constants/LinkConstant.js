// src/links.js
import { CiHome } from 'react-icons/ci';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { CiFileOn, CiFolderOn } from 'react-icons/ci';
import { PiNotificationLight } from 'react-icons/pi';
import Photo from '../assets/photo-1.jpg';

const links = [
	{
		name: 'Home',
		path: '/',
		icon: CiHome,
	},
	{
		name: 'Profile',
		path: '/profile',
		icon: MdOutlineMarkEmailUnread,
	},
	{
		name: 'Documents',
		path: '/Documents',
		icon: CiFileOn,
	},
	{
		name: 'Folders',
		path: '/Folders',
		icon: CiFolderOn,
	},
	{
		name: 'Notification',
		path: '/Notifications',
		icon: PiNotificationLight,
	},
];

const Users = [
	{
		name: 'Ruta vault',
		photo: Photo,
	},
	{
		name: 'Axcel Renzi',
		photo: Photo,
	},
	{
		name: 'Axcel muhire',
		photo: Photo,
	},
	{
		name: 'Axcel muhire',
		photo: Photo,
	},
];
export { links, Users };
