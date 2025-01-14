package se.jr.todobackend.todo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    // HTTP methods

    // Add todo
    @PostMapping("")
    public ResponseEntity<String> createTodo(@RequestBody TodoDto dto) {
        todoService.createTodo(dto);
        return new ResponseEntity<>("Todo created.", HttpStatus.CREATED);
    }

    // Get one todo by id
    @GetMapping("/{id}")
    public ResponseEntity<TodoDto> getTodoById(@PathVariable Integer id) {
        return ResponseEntity.ok(todoService.getTodoById(id));
    }

    // Get all todos
    @GetMapping("")
    public ResponseEntity<List<TodoDto>> getAllTodos() {
        return new ResponseEntity<>(todoService.getAllTodos(), HttpStatus.OK);
    }

    // Update todo by id
    @PutMapping("/{id}")
    public ResponseEntity<String> updateTodo(@PathVariable Integer id, @RequestBody TodoDto dto) {
        todoService.updateTodo(id, dto);

        return new ResponseEntity<>("Todo has been updated.", HttpStatus.OK);
    }

    // Delete todo by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Integer id) {
        todoService.deleteTodo(id);

        return new ResponseEntity<>("Todo has been deleted.", HttpStatus.NO_CONTENT);
    }
}
