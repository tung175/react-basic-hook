const Todo = (props) => {
  const { todos, title, deleteDataTodos } = props;

  const handleDelete = (id) => {
    deleteDataTodos(id)
  }
  return (
    <div>
      <div className="title">{title}</div>
      {todos.map((todos) => {
        return (
          <div key={todos.id}>
            <li className="todo-child">{todos.title} <span onClick={() => handleDelete(todos.id)}>x</span></li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};
export default Todo;
