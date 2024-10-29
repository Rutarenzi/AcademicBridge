import React from 'react';
import Card from '../components/Card';
import { cards } from '../constants/LinkConstant';

const CardGrid = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[95%] mx-auto pt-8">
			{cards.map((card) => (
				<Card key={card.id} status={card.status} image={card.image} />
			))}
		</div>
	);
};

export default CardGrid;
