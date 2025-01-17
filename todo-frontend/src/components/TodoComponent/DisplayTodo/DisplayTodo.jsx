import TodoCard from "./TodoCard/TodoCard";

function DisplayTodo(props) {
  const { userTodos } = props;

  const userTodoComponents = userTodos.map((todo) => {
    return <TodoCard key={todo.id} todo={todo} />;
  });
  return (
    // Ta bort div, ul -> li

    <div>
      <ul>{userTodoComponents}</ul>
    </div>
  );
}

export default DisplayTodo;
