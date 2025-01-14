package se.jr.todobackend.user;

import se.jr.todobackend.todo.TodoDto;

import java.util.List;

public class UserDto {

    private Integer id;
    private String username;
    private List<TodoDto> todos;

    public UserDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<TodoDto> getTodos() {
        return todos;
    }

    public void setTodos(List<TodoDto> todos) {
        this.todos = todos;
    }
}
