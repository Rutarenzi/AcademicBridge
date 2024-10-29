import React from 'react';
import Skeleton from 'react-loading-skeleton'; // You may need to install this package
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
	return (
		<div className="border-none rounded-2xl bg-white dark:bg-gray-800 px-4 pt-2 flex flex-col gap-4 items-center justify-center">
			<Skeleton height={150} className="rounded-lg mb-2" />

			<div className="flex justify-between w-full">
				<Skeleton width={80} height={20} />
				<Skeleton width={40} height={20} />
			</div>
			<div className="w-full border-b border-gray-200 pb-4">
				<Skeleton height={25} width="60%" className="mb-2" />
				<Skeleton height={15} width="80%" />
			</div>
			<div className="flex justify-between w-full">
				<div className="flex -space-x-2 overflow-hidden p-1 ml-3">
					{Array.from({ length: 3 }).map((_, index) => (
						<Skeleton key={index} circle={true} height={32} width={32} />
					))}
				</div>
				<div className="flex items-center">
					<Skeleton width={20} height={20} className="mr-1" />
					<Skeleton width={15} height={20} />
				</div>
			</div>
		</div>
	);
};

export default CardSkeleton;
