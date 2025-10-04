
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Wardley Doctrine & AI</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">An interactive analysis of how AI-accelerated development impacts strategic management, based on Simon Wardley's doctrine.</p>
        </header>
    );
};

export default Header;
