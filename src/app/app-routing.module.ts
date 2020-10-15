import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'todos'},
  {path: 'todos', component: TodosComponent},
  {path: 'add', component: AddTodoComponent},
  {path: 'update/:id', component: UpdateTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
