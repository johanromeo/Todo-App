package se.jr.todobackend.todo;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "todos")
public class TodoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
}
