"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className={"font-bold text-3xl mb-2 cursor-pointer"} onClick={handleClick}>
                Country Informer
            </h1>
        </header>
    );
};

export default Header;