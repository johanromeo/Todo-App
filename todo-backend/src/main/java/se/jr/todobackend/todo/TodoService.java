package se.jr.todobackend.todo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;
    private final ObjectMapper mapper;

    public TodoService(TodoRepository todoRepository, ObjectMapper mapper) {
        this.todoRepository = todoRepository;
        this.mapper = mapper;
    }

    // CRUD methods

    // Add todo
    public void createTodo(TodoDto dto) {
        TodoEntity todo = mapper.convertValue(dto, TodoEntity.class);
        todoRepository.save(todo);
    }

    // Get one todo by id
    public TodoDto getTodoById(Integer id) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo with id " + id + " does not exist."));

        return mapper.convertValue(todo, TodoDto.class);
    }

    // Get all todos
    public List<TodoDto> getAllTodos() {
        List<TodoEntity> todos = todoRepository.findAll();

        return mapper.convertValue(todos, new TypeReference<>() {
        });
    }

    // Update todo by id
    public void updateTodo(Integer id, TodoDto dto) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo with id " + id + " does not exist."));
        todo.setTitle(dto.getTitle());
        todo.setTodo(dto.getTodo());
        todo.setCompleted(dto.isCompleted());
        todoRepository.save(todo);
    }

    // Delete todo by id
    public void deleteTodo(Integer id) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo with id " + id + " does not exist."));
        todoRepository.delete(todo);
    }
}
