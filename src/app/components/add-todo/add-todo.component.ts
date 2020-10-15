import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from 'src/app/models/Todo';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todos: Todo[];

  id: number;
  title: string;
  user_id: number;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      id: this.id,
      title: this.title,
      user_id: this.user_id,
      completed: false
    }

    this.todoService.createTodo(todo).subscribe(todo => {
      // this.todos.push(todo);
      console.log(todo);
    })

    this.router.navigate(['/todos']);
  }
}
