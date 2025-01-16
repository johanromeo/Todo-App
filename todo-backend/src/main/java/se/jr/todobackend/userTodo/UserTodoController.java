package se.jr.todobackend.userTodo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.jr.todobackend.todo.TodoDto;
import se.jr.todobackend.todo.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/users/{userId}/todos")
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

    @GetMapping("/{id}")
    public ResponseEntity<TodoDto> getTodoById(@PathVariable Integer id) {
        return ResponseEntity.ok(todoService.getTodoById(id));
    }

    @GetMapping("")
    public ResponseEntity<List<TodoDto>> getAllTodos(@PathVariable Integer userId) {
//        return ResponseEntity.ok(todoService.getAllTodos());
        return ResponseEntity.ok(todoService.getAllUserTodos(userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TodoDto> updateTodo(@PathVariable Integer id, @RequestBody TodoDto dto) {
        return ResponseEntity.ok(todoService.updateTodo(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Integer id) {
        todoService.deleteTodo(id);

        return new ResponseEntity<>("Todo has been deleted.", HttpStatus.NO_CONTENT);
    }
}
