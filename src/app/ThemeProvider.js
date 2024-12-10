'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ThemeProvider = () => {
	const pathname = usePathname();

	useEffect(() => {
		const root = document.documentElement;

		switch (pathname) {
			case '/publisher/the-bump':
				root.style.setProperty('--primary-color', '255 255 255');
				root.style.setProperty('--secondary-color', '8 19 56');
				root.style.setProperty('--action-color', '142 45 129');
				root.style.setProperty('--brand-color', '142 45 129');
				break;
			case '/the-bump':
				root.style.setProperty('--primary-color', '255 255 255');
				root.style.setProperty('--secondary-color', '8 19 56');
				root.style.setProperty('--action-color', '142 45 129');
				root.style.setProperty('--brand-color', '8 19 56');
				break;
			case '/publisher/buzzfeed':
				root.style.setProperty('--primary-color', '250 233 234');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '205 52 55');
				root.style.setProperty('--brand-color', '205 52 55');
				break;
			case '/publisher/readers-digest':
				root.style.setProperty('--primary-color', '255 255 255');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '205 52 55');
				root.style.setProperty('--brand-color', '205 52 55');
				break;
			case '/publisher/gq':
				root.style.setProperty('--primary-color', '249 245 236');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '198 161 73');
				root.style.setProperty('--brand-color', '198 161 73');
				break;
			case '/publisher/people':
				root.style.setProperty('--primary-color', '198 241 255');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '0 180 236');
				root.style.setProperty('--brand-color', '0 180 236');
				break;
			case '/publisher/bestproducts':
				root.style.setProperty('--primary-color', '198 241 255');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '28 28 156');
				root.style.setProperty('--brand-color', '28 28 156');
				break;
			case '/publisher/foodnetwork':
				root.style.setProperty('--primary-color', '250 191 194');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '216 33 44');
				root.style.setProperty('--brand-color', '216 33 44');
				break;
			case '/publisher/fandom':
				root.style.setProperty('--primary-color', '245 217 255');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '229 49 94');
				root.style.setProperty('--brand-color', '229 49 94');
				break;
			case '/publisher/techradar':
				root.style.setProperty('--primary-color', '255 240 249');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '10 14 32');
				root.style.setProperty('--brand-color', '10 14 32');
				break;
			case '/publisher/nymag':
				root.style.setProperty('--primary-color', '255 255 255');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '0 0 0');
				root.style.setProperty('--brand-color', '0 0 0');
				break;
			case '/publisher/reddit':
				root.style.setProperty('--primary-color', '228 194 183');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '217 57 0');
				root.style.setProperty('--brand-color', '217 57 0');
				break;
			case '/publisher/pinterest':
				root.style.setProperty('--primary-color', '250 244 242');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '230 0 35');
				root.style.setProperty('--brand-color', '230 0 35');
				break;
			case '/publisher/myfitnesspal':
				root.style.setProperty('--primary-color', '203 223 251');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '0 102 238');
				root.style.setProperty('--brand-color', '0 102 238');
				break;
			case '/publisher/tumblr':
				root.style.setProperty('--primary-color', '229 249 255');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '0 184 255');
				root.style.setProperty('--brand-color', '0 184 255');
				break;
			case '/publisher/webmd':
				root.style.setProperty('--primary-color', '229 231 243');
				root.style.setProperty('--secondary-color', '0 0 0');
				root.style.setProperty('--action-color', '0 21 124');
				root.style.setProperty('--brand-color', '0 21 124');
				break;
			default:
				root.style.setProperty('--primary-color', '247 186 48');
				root.style.setProperty('--secondary-color', '0 48 69');
				root.style.setProperty('--action-color', '0 48 69');
				root.style.setProperty('--brand-color', '247 186 48');
				break;
		}
	}, [pathname]);

	return null;
};

export default ThemeProvider;
