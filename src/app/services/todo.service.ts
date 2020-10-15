import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'; 

import { Todo } from '../models/Todo';

const TOKEN_AUTH = '27f4d8dfe27678a67025eb6d591fdb597e53b80d1ef571b4dd388e17a83ce488';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN_AUTH}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  BASE_URL: string = 'https://gorest.co.in/public-api/todos';

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URL}`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.BASE_URL}`, todo, {headers: httpOptions.headers});
  }

  updateTodo(id: number, todo: Todo): Observable<Object> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.BASE_URL}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  getTodoById(id: number): Observable<Todo> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Todo>(url);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.BASE_URL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
