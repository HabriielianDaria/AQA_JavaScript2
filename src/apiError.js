const axios = require("axios");

async function fetchWithError() {
  try {
    await axios.get("https://jsonplaceholder.typicode222.com");
  } catch {
    return "Request failed";
  }
}

module.exports = fetchWithError;
