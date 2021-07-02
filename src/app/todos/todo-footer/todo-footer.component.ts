import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {filtrar, filtrosValidos} from '../../filtro/filtro.actions';
import {borrar, clearCompleted} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos','completados','pendientes']

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  changeFiltro(filtro) {
    this.store.dispatch(filtrar({filtro: filtro}));
  }

  ngOnInit() {

    this.store.subscribe( state => {
        this.filtroActual = state.filtro;
        this.pendientes = state.todos.filter( todo => !todo.completado).length;
      }
    );
    /*this.store.select('filtro').subscribe(
      filtro => {
        this.filtroActual = filtro;
      }
    );*/
  }

  clearCompleted(){

    this.store.dispatch(clearCompleted());
  }

}
