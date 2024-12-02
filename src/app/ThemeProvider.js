'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ThemeProvider = () => {
	const pathname = usePathname();

	useEffect(() => {
		const root = document.documentElement;

		switch (pathname) {
			// case '/publisher/the-bump':
			// 	root.style.setProperty('--secondary-color', '#8a317d');
			// 	root.style.setProperty('--primary-color', '#081338');
			// 	break;
			default:
				root.style.setProperty('--primary-color', '#f7ba30');
				root.style.setProperty('--secondary-color', '#003045');
				break;
		}
	}, [pathname]);

	return null;
};

export default ThemeProvider;
