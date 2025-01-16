package se.jr.todobackend.todo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TodoRepository extends JpaRepository<TodoEntity, Integer> {

    List<TodoEntity> findTodoEntitiesByUserEntity_Id(Integer userId);
}
