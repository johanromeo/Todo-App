package se.jr.todobackend.userTodo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.jr.todobackend.todo.TodoDto;
import se.jr.todobackend.todo.TodoService;

@RestController
@RequestMapping("api/users/{userId}/todos")
@CrossOrigin("*")
public class UserTodoController {

    private final TodoService todoService;

    public UserTodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("")
    public ResponseEntity<TodoDto> createUserTodo(@PathVariable Integer userId, @RequestBody TodoDto dto) {
        return new ResponseEntity<>(todoService.createUserTodo(userId, dto), HttpStatus.CREATED);
    }
}
