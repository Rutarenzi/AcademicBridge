import React, { useEffect } from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AllToDoThunk } from '../Redux/action/AllToDo';
import CardSkeleton from '../components/skeleton/CardSkeleton';

const CardGrid = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(AllToDoThunk());
	}, [dispatch]);
	const { load, AllToDo } = useSelector((state) => state.AllTodo);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[95%] mx-auto pt-8">
			{load ? (
				<>
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />{' '}
				</>
			) : (
				AllToDo.map((card) => (
					<Card key={card.id} status={card.completed} description={card.todo} />
				))
			)}
		</div>
	);
};

export default CardGrid;
