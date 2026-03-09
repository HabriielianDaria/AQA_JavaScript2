const fetchWithHeadersAndParams = require("../src/apiHeaders");

test("правильно передає заголовки та параметри", async () => {
  const config = await fetchWithHeadersAndParams();

  expect(config.headers["Custom-Header"]).toBe("TestHeaderValue");
  expect(config.params.userId).toBe(1);
});
