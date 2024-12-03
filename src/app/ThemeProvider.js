'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ThemeProvider = () => {
	const pathname = usePathname();

	useEffect(() => {
		const root = document.documentElement;

		switch (pathname) {
			case '/publisher/the-bump':
				root.style.setProperty('--primary-color', '255 255 255'); // RGB for #fff
				root.style.setProperty('--secondary-color', '8 19 56'); // RGB for #081338
				root.style.setProperty('--action-color', '142 45 129'); // RGB for #8a317d
				root.style.setProperty('--brand-color', '8 19 56'); // RGB for #8a317d
				break;
			case '/the-bump':
				root.style.setProperty('--primary-color', '255 255 255'); // RGB for #fff
				root.style.setProperty('--secondary-color', '8 19 56'); // RGB for #081338
				root.style.setProperty('--action-color', '142 45 129'); // RGB for #8a317d
				root.style.setProperty('--brand-color', '8 19 56'); // RGB for #8a317d
				break;
			default:
				root.style.setProperty('--primary-color', '247 186 48'); // RGB for #f7ba30
				root.style.setProperty('--secondary-color', '0 48 69'); // RGB for #003045
				root.style.setProperty('--action-color', '0 48 69'); // RGB for #003045
				root.style.setProperty('--brand-color', '247 186 48'); // RGB for #003045
				break;
		}
	}, [pathname]);

	return null;
};

export default ThemeProvider;
