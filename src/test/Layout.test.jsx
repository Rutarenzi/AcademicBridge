import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../pages/Layout';

test('renders SideBar and TopNavbar correctly', () => {
	render(<Layout />);
	expect(screen.getByText('ACADEMIC')).toBeInTheDocument();
	expect(screen.getByText('Home')).toBeInTheDocument();
});

test('toggles sidebar open and close', () => {
	render(<Layout />);

	const toggleButton = screen.getByRole('button', { name: /menu/i });
	fireEvent.click(toggleButton);

	expect(screen.getByText('ACADEMIC')).toBeVisible();
});
