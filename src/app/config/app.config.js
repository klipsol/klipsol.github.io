const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://app.dpanda.in"
    : "https://staging.app.dpanda.in";

export default API_BASE_URL;
