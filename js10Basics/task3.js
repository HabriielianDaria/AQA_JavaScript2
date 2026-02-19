async function fetchTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }
  return response.json();
}

async function fetchUserAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}

async function getAllData() {
  try {
    const [todo, user] = await Promise.all([
      fetchTodoAsync(),
      fetchUserAsync(),
    ]);

    console.log("Async Promise.all:");
    console.log(todo);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}

getAllData();

async function getFirstData() {
  try {
    const result = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);

    console.log("Async Promise.race:");
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

getFirstData();
