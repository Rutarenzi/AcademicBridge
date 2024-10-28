import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from '../components/SideBar'; // Adjust path accordingly

describe('SideBar Component', () => {
	const mockToggle = jest.fn();

	beforeEach(() => {
		render(<SideBar sideBarStatus={true} toggleSideBar={mockToggle} />);
	});

	test('renders correctly when sidebar is open', () => {
		expect(screen.getByText('ACADEMIC')).toBeInTheDocument();
		expect(screen.getByText('Settings')).toBeInTheDocument();
		expect(screen.getByText('Add User')).toBeInTheDocument();
	});
});
