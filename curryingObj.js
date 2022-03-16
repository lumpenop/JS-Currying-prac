const { property } = require("lodash");

const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

// const getTodosIdArr = todos => todos.map(todo => todo.id);
// const getTodosContentArr = todos => todos.map(todo => todo.content);
// const getTodosCompletedArr = todos => todos.map(todo => todo.completed);

const get = property => obj => obj[property];

const getId = get('id');
const getContent = get('content');
const getCompleted = get('completed');

const getIds = todos => todos.map(getId);

console.log(getIds(todos));
