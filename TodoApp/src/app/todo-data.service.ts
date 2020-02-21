import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable'
import { HttpClient } from '@angular/common/http'
import {Todo} from './todo';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

 @Injectable() 


export class TodoDataService{
  lastId:number=0;
 todos:Todo[]=[];

constructor(private http:HttpClient)
{

}

getData():Observable<string>
{
  return this.http.get<string>('C:\Drive\WP\data.txt');
}

getAllTodos(): Observable<Todo[]> {
  return this.http.get<Todo[]>('http://localhost:8000/api/cats');
}


addTodo(todo:Todo):TodoDataService{
  if(!todo.id)
  {
    todo.id=++this.lastId;    
  }
this.todos.push(todo);

return this;
}

deleteTodoById(id:number):TodoDataService{

  this.todos=this.todos.filter(todo=>todo.id!=id);

  return this;
}

getTodoById(id:number):Todo{
return this.todos.filter(todo=>todo.id==id).pop();
}

// getAllTodos():Todo[]{
//   return this.todos;
// }

updateTodoById(id:number,values:object={}){
  let todo=this.getTodoById(id);
Object.assign(todo,values);
return todo;
}

toggleTodoComplete(todo:Todo)
{
  let updatedTodo = this.updateTodoById(todo.id, {
    complete: !todo.complete
  });
  return updatedTodo;
}

}

