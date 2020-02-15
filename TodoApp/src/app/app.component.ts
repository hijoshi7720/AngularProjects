import { Component } from '@angular/core';
import{TodoDataService} from './todo-data.service'
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent {
  
  //public todos1=this.todoDataService.getAllTodos();

  public newTodo:Todo=new Todo();

  constructor(private todoDataService:TodoDataService)
  {

  }

  addTodo()
  {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo=new Todo();
  }

  toggleTodoComplete(todo)
  {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos1()
  {
    return this.todoDataService.getAllTodos();
  }

}
