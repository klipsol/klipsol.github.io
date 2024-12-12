import axios from "axios";

export const eventNames = {
	WISHLIST_CLICK: 'WISHLIST_CLICK',
};

function createEventData(eventName, eventData) {
	const baseEventData = {
		source: 'corporate_website',
		origin: window.location.hostname,
		pathname: window.location.pathname + window.location.search,
		useragent: navigator.userAgent,
		time_stamp: Date.now().toString(),
	};

	return {
		...baseEventData,
		event_name: eventName,
		tracking_info: { ...eventData },
	};
}

function fireBeacon(eventData) {
	const url = 'https://beacon.dpanda.in/apihook.php';
	const data = eventData;
	const MAX_RETRIES = 3;
	let retries = 0;
	const app_version = process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0';
	if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
		const sendBeaconRequest = () => {
			axios.post(url, { ...data, app_version }).catch((err) => {
				console.log('Retrying', err);
				retries++;
				retries < MAX_RETRIES && setTimeout(() => sendBeaconRequest(), 3000);
			});
		};

		sendBeaconRequest();
	}
}

const spreadObject = (obj) => {
	const result = {};

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
				const nestedObj = spreadObject(obj[key]);
				for (const nestedKey in nestedObj) {
					if (nestedObj.hasOwnProperty(nestedKey)) {
						result[`${key}:${nestedKey}`] = nestedObj[nestedKey];
					}
				}
			} else {
				result[key] = obj[key];
			}
		}
	}

	return result;
};

const fireEvents = (eventName, eventPayload) => {
	const landingPage = sessionStorage.getItem('landingPage') || 'unknown';
	const extendedEventPayload = {
		...eventPayload,
		landingPage,
	};

	const isDemoOrStaging = /\.demo|\.staging|localhost/i.test(window.location.hostname);
	const eventData = createEventData(eventName, extendedEventPayload);
	if (!isDemoOrStaging) {
		fireBeacon(eventData);
	} else if (/^localhost$/i.test(window.location.hostname)) {
		console.log('fired event', eventData);
	}
};

const trackPageView = (url) => {
	const landingPage = sessionStorage.getItem('landingPage') || 'unknown';
	const eventData = {
		page: url,
		landingPage,
	};
	fireEvents('PAGE_VIEW', eventData);
};

export const beaconEvents = {
	trackPageView,
	fireEvents,
};
