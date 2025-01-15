package se.jr.todobackend.todo;

import org.springframework.stereotype.Service;
import se.jr.todobackend.mapper.TodoMapper;
import se.jr.todobackend.user.UserEntity;
import se.jr.todobackend.user.UserRepository;

import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;
    private final UserRepository userRepository;
    private final TodoMapper todoMapper;

    public TodoService(TodoRepository todoRepository, UserRepository userRepository, TodoMapper todoMapper) {
        this.todoRepository = todoRepository;
        this.userRepository = userRepository;
        this.todoMapper = todoMapper;
    }


    public TodoDto createUserTodo(Integer userId, TodoDto dto) {
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("No user with id " + userId + " exists."));

        TodoEntity todo = todoMapper.mapToEntity(dto);
        todo.setCreatedAt(new Date());
        todo.setUserEntity(user);
        user.getTodos().add(todo);
        todoRepository.save(todo);

        userRepository.save(user);

        return todoMapper.mapToDto(todo);
    }

    public TodoDto getTodoById(Integer id) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo with id " + id + " does not exist."));

        return todoMapper.mapToDto(todo);
    }

    public List<TodoDto> getAllTodos() {
        List<TodoEntity> todos = todoRepository.findAll();

        return todoMapper.mapToDtos(todos);
    }

    public TodoDto updateTodo(Integer id, TodoDto dto) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo with id " + id + " does not exist."));

        UserEntity user = userRepository.findById(dto.getUserId())
                        .orElseThrow(() -> new RuntimeException("User with id " + id + " does not exist."));

        todo.setTitle(dto.getTitle());
        todo.setTodo(dto.getTodo());
        todo.setCompleted(dto.isCompleted());
        todo.setUserEntity(user);
        todoRepository.save(todo);

        userRepository.save(user);

        return todoMapper.mapToDto(todo);
    }

    public void deleteTodo(Integer id) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo with id " + id + " does not exist."));

        todoRepository.delete(todo);
    }
}
