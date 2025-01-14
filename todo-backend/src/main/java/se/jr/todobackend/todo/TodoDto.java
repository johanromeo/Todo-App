package se.jr.todobackend.todo;

public class TodoDto {

    private Integer id;
    private String title;
    private String todo;
    private boolean completed;

    public TodoDto(Integer id, String title, String todo, boolean completed) {
        this.id = id;
        this.title = title;
        this.todo = todo;
        this.completed = completed;
    }

    public TodoDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
