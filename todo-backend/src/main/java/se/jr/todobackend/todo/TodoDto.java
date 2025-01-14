package se.jr.todobackend.todo;

import lombok.Data;

@Data
public class TodoDto {

    private int id;
    private String title;
    private String note;
}
