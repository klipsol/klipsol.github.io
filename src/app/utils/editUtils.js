export const transformPublisherMetadata = (metadata) => {
  return Object.entries(metadata).map(([name, data]) => ({
    name,
    ...data,
  }));
};
