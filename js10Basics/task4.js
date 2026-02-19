class TodoService {
  async getTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  }
}

class UserService {
  async getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return res.json();
  }
}

const todoService = new TodoService();
const userService = new UserService();

Promise.all([todoService.getTodo(), userService.getUser()]).then(
  ([todo, user]) => {
    console.log(todo);
    console.log(user);
  },
);
