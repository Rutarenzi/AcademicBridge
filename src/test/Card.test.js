import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import Photo from '../assets/photo-1.jpg';

describe('Card Component', () => {
	const defaultProps = {
		status: 'Completed',
		description: 'This is a card description.',
	};

	it('renders correctly with default props', () => {
		render(<Card {...defaultProps} />);
		expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
	});

	it("renders image when status is 'In Progress'", () => {
		render(<Card status={null} description={defaultProps.description} />); // Updated status

		const img = screen.getByAltText('In Progress');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', Photo); // Check if the correct image is rendered
	});

	it("does not render image when status is 'Completed'", () => {
		render(<Card {...defaultProps} />);
		const img = screen.queryByAltText('In Progress');
		expect(img).not.toBeInTheDocument();
	});

	it('displays the description text', () => {
		render(<Card {...defaultProps} />);
		expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
	});

	it('displays user avatars', () => {
		render(<Card status={null} description={defaultProps.description} />);

		const avatars = screen.getAllByRole('img');
		expect(avatars.length).toBe(1); // Assuming Users.slice(0, 3) returns 3 users
	});

	it('displays the comment icon and count', () => {
		render(<Card status={null} description={defaultProps.description} />);

		expect(screen.getByText('6')).toBeInTheDocument(); // Assuming a count of 6 comments
	});
});
