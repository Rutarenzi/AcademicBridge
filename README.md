# AcademicBridge
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Rutarenzi/AcademicBridge/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Rutarenzi/AcademicBridge/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/Rutarenzi/AcademicBridge/badge.svg)](https://coveralls.io/github/Rutarenzi/AcademicBridge)



"jest --findRelatedTests"
"test:staged": "CI=true react-scripts test --o",


      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}  # Use GitHub Secrets for security
        run: |
          yarn i -g vercel
          vercel --prod --confirm --token $VERCEL_TOKEN --scope your-scope


// index.test.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; // Ensure this path is correct

// Mock the ReactDOM.createRoot method
jest.mock('react-dom/client', () => {
    return {
        createRoot: jest.fn(() => ({
            render: jest.fn(),
        })),
    };
});

describe('index.jsx', () => {
    test('renders App component correctly', () => {
        // Import the index file (this should trigger the rendering)
        require('../index.jsx'); // Ensure this path is correct

        // Get the mocked createRoot and its render method
        const createRootMock = require('react-dom/client').createRoot;
        const mockRender = createRootMock().render;

        // Check that createRoot was called
        expect(createRootMock).toHaveBeenCalledTimes(2); // Ensure it's called once

        // Check that render was called with the correct JSX
        expect(mockRender).toHaveBeenCalledTimes(1); // Ensure render was called once
        expect(mockRender).toHaveBeenCalledWith(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    });
});

VERCEL_TOKEN:etTERuT7XrPrpY8D3WcmH2Qp