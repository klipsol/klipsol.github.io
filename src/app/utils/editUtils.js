import axios from "axios";

export const transformPublisherMetadata = (metadata) => {
  return Object.entries(metadata).map(([name, data]) => ({
    name,
    ...data,
  }));
};

export const getSiteData = async (params = {}) => {
  try {
    const res = await axios.get(location.origin + "/api/get-publishers-sites", {
      params: params,
    });
    return res.data;
  } catch (err) {
    console.log("failed to fetch site data");
    return {};
  }
};
