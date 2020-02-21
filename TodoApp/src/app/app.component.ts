import { Component } from '@angular/core';
import{TodoDataService} from './todo-data.service'
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { strict } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent {
  
  //public todos1=this.todoDataService.getAllTodos();

  //public newTodo:Todo=new Todo();

  constructor(private todoDataService:TodoDataService)
  {

  }

  showData():Observable< string>
  {
   return this.todoDataService.getData().subscribe<string>();
  }

  // addTodo()
  // {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo=new Todo();
  // }

  onAddTodo(todo:Todo)
  {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo)
  {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos()
  {
    return this.todoDataService.getAllTodos();
  }

}
