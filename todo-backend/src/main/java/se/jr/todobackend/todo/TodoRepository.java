package se.jr.todobackend.todo;

import org.springframework.data.jpa.repository.JpaRepository;


public interface TodoRepository extends JpaRepository<TodoEntity, Integer> {
}
