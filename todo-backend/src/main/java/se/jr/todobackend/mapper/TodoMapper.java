package se.jr.todobackend.mapper;

import org.springframework.stereotype.Component;
import se.jr.todobackend.todo.TodoDto;
import se.jr.todobackend.todo.TodoEntity;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TodoMapper {

    public TodoEntity mapToEntity(TodoDto todoDto) {
        TodoEntity todoEntity = new TodoEntity();

        todoEntity.setId(todoDto.getId());
        todoEntity.setTitle(todoDto.getTitle());
        todoEntity.setCompleted(todoDto.isCompleted());
        todoEntity.setCreatedAt(todoDto.getCreatedAt());
        todoEntity.setTodo(todoDto.getTodo());

        return todoEntity;
    }

    public List<TodoEntity> mapToEntities(List<TodoDto> todoDtos) {
        return todoDtos.stream().map(this::mapToEntity).collect(Collectors.toList());
    }

    public TodoDto mapToDto(TodoEntity todoEntity) {
        TodoDto todoDto = new TodoDto();

        todoDto.setId(todoEntity.getId());
        todoDto.setTitle(todoEntity.getTitle());
        todoDto.setCompleted(todoEntity.isCompleted());
        todoDto.setCreatedAt(todoEntity.getCreatedAt());
        todoDto.setTodo(todoEntity.getTodo());
        todoDto.setUserId(todoEntity.getUserEntity().getId());

        return todoDto;
    }

    public List<TodoDto> mapToDtos(List<TodoEntity> todoEntities) {
        if (todoEntities != null) {
            return todoEntities.stream().map(this::mapToDto).collect(Collectors.toList());
        } else {
            return null;
        }
    }
}
