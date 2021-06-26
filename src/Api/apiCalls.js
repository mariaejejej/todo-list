export const fetchControlErrors = async (config) => {
  const { endpoint, method } = config;

  const headers = {
    Accept: "Application/json",
  };

  const connection = {
    headers,
    method,
  };

  const response = fetch(endpoint, connection);

  return response;
};
export default fetchControlErrors;
