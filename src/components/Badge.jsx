import React from 'react';

// eslint-disable-next-line react/prop-types
const Badge = ({ status }) => {
	const statusStyles = {
		'In Progress': 'bg-blue-100 text-blue-800',
		Completed: 'bg-green-100 text-green-800',
		'To do': 'bg-red-100 text-red-800 ring-blue-200',
		Default: 'bg-gray-50 text-gray-600 ring-gray-500/10',
	};
	const appliedStyles = statusStyles[status] || statusStyles.Default;

	return (
		<span
			className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${appliedStyles}`}
		>
			{status}
		</span>
	);
};

export default Badge;
