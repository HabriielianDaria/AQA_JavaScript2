const axios = require("axios");

async function fetchWithHeadersAndParams() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      headers: { "Custom-Header": "TestHeaderValue" },
      params: { userId: 1 },
    },
  );
  return response.config;
}

module.exports = fetchWithHeadersAndParams;
