import { Injectable } from '@angular/core';
import {Todo} from './todo';

// @Injectable() 


export class TodoDataService{
  lastId:number=0;
public todos:Todo[]=[];

constructor()
{

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

getAllTodos():Todo[]{
  return this.todos;
}

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

