const axios = require("axios");
const fetchWithError = require("../src/apiError");

jest.mock("axios");

test("повертає повідомлення про помилку при неправильній URL", async () => {
  axios.get.mockRejectedValue(new Error("Network Error"));

  const result = await fetchWithError();

  expect(result).toBe("Request failed");
});
