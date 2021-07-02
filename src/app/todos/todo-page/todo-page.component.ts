import { Component, OnInit } from '@angular/core';
import {AppState} from '../../app.reducer';
import {toggleAll} from '../todo.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado= false;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.completado = !this.completado;
    //doneS lanzar accion toggleAll
    this.store.dispatch(toggleAll({ value: this.completado }));
  }
}
