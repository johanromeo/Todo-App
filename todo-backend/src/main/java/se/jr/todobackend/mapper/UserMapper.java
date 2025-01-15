package se.jr.todobackend.mapper;

import org.springframework.stereotype.Component;
import se.jr.todobackend.todo.TodoDto;
import se.jr.todobackend.todo.TodoEntity;
import se.jr.todobackend.user.UserDto;
import se.jr.todobackend.user.UserEntity;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    private final TodoMapper todoMapper;

    public UserMapper(TodoMapper todoMapper) {
        this.todoMapper = todoMapper;
    }

    public UserEntity mapToEntity(UserDto userDto) {
        UserEntity userEntity = new UserEntity();

        userEntity.setId(userDto.getId());
        userEntity.setUsername(userDto.getUsername());

        List<TodoEntity> todoEntities = todoMapper.mapToEntities(userDto.getTodos());

        for (TodoEntity todoEntity : todoEntities) {
            todoEntity.setUserEntity(userEntity);
        }
        if (todoEntities != null) {
            userEntity.setTodos(todoEntities);
        }

        return userEntity;

    }

    public UserDto mapToDto(UserEntity userEntity) {
        UserDto userDto = new UserDto();

        userDto.setId(userEntity.getId());
        userDto.setUsername(userEntity.getUsername());

        List<TodoDto> todoDtos = todoMapper.mapToDtos(userEntity.getTodos());
        if (todoDtos != null) {
            userDto.setTodos(todoDtos);
        }

        return userDto;
    }

    public List<UserDto> mapToDtos(List<UserEntity> userEntities) {
        if (userEntities != null) {
            return userEntities.stream().map(this::mapToDto).collect(Collectors.toList());
        } else {
            return null;
        }
    }
}
