package se.jr.todobackend.user;

import org.springframework.stereotype.Service;
import se.jr.todobackend.mapper.UserMapper;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }


    public UserDto createUser(UserDto dto) {
        UserEntity user = new UserEntity();
        user.setUsername(dto.getUsername());
        userRepository.save(user);

        return userMapper.mapToDto(user);
    }

    public List<UserDto> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();

        return userMapper.mapToDtos(userEntities);
    }

    public void deleteUser(Integer id) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User with id " + id + " does not exist."));

        userRepository.delete(user);
    }
}
