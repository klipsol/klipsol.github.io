export const SetUtmParams = (payload = {}) => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const utmParams = {};
  const params = Object.keys(payload).length === 0
    ? new URLSearchParams(window.location.search)
    : new Map(Object.entries(payload));

  params.forEach((value, key) => {
    if (key.startsWith("utm_")) {
      try {
        utmParams[key] = decodeURIComponent(value);
      } catch (error) {
        console.warn(`Error decoding ${key}:`, error);
        utmParams[key] = value;
      }
    }
  });

  if (Object.keys(utmParams).length > 0) {
    const cookieValue = encodeURIComponent(JSON.stringify(utmParams));
    document.cookie = `utm-params=${cookieValue}; max-age=3600; path=/; Secure; SameSite=Lax;`;
    console.log("UTM Parameters:", utmParams);
  }
};