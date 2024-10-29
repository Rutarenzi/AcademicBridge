import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import Photo from '../assets/photo-1.jpg';

describe('Card Component', () => {
	const defaultProps = {
		status: 'Completed',
		image: Photo,
	};

	it('renders correctly with default props', () => {
		render(<Card {...defaultProps} />);

		expect(screen.getByText('Footer Design')).toBeInTheDocument();
		expect(screen.getByText('Landing Page UI')).toBeInTheDocument();
		expect(screen.getByText('Completed')).toBeInTheDocument();
	});

	it("renders image when status is 'In Progress'", () => {
		render(<Card status="In Progress" image={defaultProps.image} />);

		const img = screen.getByAltText('In Progress');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', defaultProps.image);
	});

	it("does not render image when status is not 'In Progress'", () => {
		render(<Card {...defaultProps} />);

		const img = screen.queryByAltText('Completed');
		expect(img).not.toBeInTheDocument();
	});
});
