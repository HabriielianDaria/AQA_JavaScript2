function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch todo");
      }
      return response.json();
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return response.json();
    });
}

const allPromise = Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("Promise.all result:");
    console.log(todo);
    console.log(user);
  })
  .catch((error) => {
    console.error("Promise.all error:", error);
  });


  const racePromise = Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("Promise.race result:");
    console.log(result);
  })
  .catch((error) => {
    console.error("Promise.race error:", error);
  });

