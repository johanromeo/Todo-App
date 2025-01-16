function TodoCard(props) {
  const { todo } = props;

  return (
    // todo={todo.todo}
    //     completed={todo.completed}
    //     createdAt={todo.createdAt}
    //     userId={todo.userId}
    //     userTodos={userTodos}
    <div>
      <li>Todo ID: {todo.id}</li>
      <li>Todo: {todo.todo}</li>
      <li>Completed: {todo.completed ? "Yes" : "No"}</li>
      <li>Created at: {todo.createdAt}</li>
      <li>Belongs to user with ID: {todo.userId}</li>
    </div>
  );
}

export default TodoCard;
