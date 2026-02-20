const axios = require("../api/axiosInstance");

describe("JSONPlaceholder API tests", () => {
  test("GET /posts - should return list of posts", async () => {
    const response = await axios.get("/posts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    expect(response.data[0]).toHaveProperty("userId");
    expect(response.data[0]).toHaveProperty("id");
    expect(response.data[0]).toHaveProperty("title");
    expect(response.data[0]).toHaveProperty("body");
  });

  test("GET /posts/1 - should return specific post", async () => {
    const response = await axios.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty("title");
  });

  test("GET /users - should return users list", async () => {
    const response = await axios.get("/users");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty("email");
    expect(response.data[0]).toHaveProperty("username");
  });

  test("POST /posts - should create new post", async () => {
    const newPost = {
      title: "Test title",
      body: "Test body",
      userId: 1,
    };

    const response = await axios.post("/posts", newPost);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test("POST /comments - should create new comment", async () => {
    const newComment = {
      name: "Test name",
      email: "test@test.com",
      body: "Test comment",
      postId: 1,
    };

    const response = await axios.post("/comments", newComment);

    expect(response.status).toBe(201);
    expect(response.data.email).toBe(newComment.email);
    expect(response.data.postId).toBe(newComment.postId);
  });
});
