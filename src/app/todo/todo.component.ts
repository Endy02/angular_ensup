import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: []
})
export class TodoComponent implements OnInit{

  @Input() title : string;
  @Output() titleChange = new EventEmitter<string>()

  public todos : Todo[] = [];

  constructor(){
    this.title = "";
  }

  ngOnInit(): void{
    
  }

  createTodo = (title: string) => {
    this.todos.push({id: this.todos.length + 1, title : title, done: false});
    this.title = "";
  }

  updateTodo = (id:number, e: Event) =>{
    let upd_todo = this.todos.find(x => x.id === id)
    let new_title = (e.target! as HTMLInputElement).value
    let index = this.todos.indexOf(upd_todo!);
    (upd_todo) ? upd_todo.title = new_title : ''
    this.todos[index] == upd_todo;
  }

  deleteTodo = (idx:number)=> {
    console.log(this.todos)
    console.log(idx)
    this.todos.splice(idx, 1)
  }
}
