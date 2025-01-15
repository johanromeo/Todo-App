package se.jr.todobackend.user;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ObjectMapper mapper;

    public UserService(UserRepository userRepository, ObjectMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    public UserDto createUser(UserDto dto) {
        UserEntity user = new UserEntity();
        user.setUsername(dto.getUsername());
        userRepository.save(user);

        return mapper.convertValue(user, UserDto.class);
    }

    public List<UserDto> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        List<UserDto> userDtos = new ArrayList<>();

        for (UserEntity userEntity : userEntities) {
            userDtos.add(mapper.convertValue(userEntity, new TypeReference<UserDto>() {
            }));
        }
        return userDtos;
    }

    public void deleteUser(Integer id) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User with id " + id + " does not exist."));
        userRepository.delete(user);
    }
}
