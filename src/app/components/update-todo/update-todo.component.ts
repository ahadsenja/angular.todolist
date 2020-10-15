import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from 'src/app/models/Todo';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})

export class UpdateTodoComponent implements OnInit {

  todos: Todo[];
  todo: Todo = new Todo();

  id: number;
  title: string;
  user_id: number;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.todoService.getTodoById(this.id).subscribe(data => {
      this.todo = data;
      console.log(data);
    }, error => console.log(error));
  }

  onSubmit() { 
    this.todoService.updateTodo(this.id, this.todo).subscribe(data => {
      this.router.navigate(['/todos'])
    }, error => console.log(error));
  }

  goToList() {
    this.router.navigate(['/todos'])
  }

}
