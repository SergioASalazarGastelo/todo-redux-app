import { createReducer, on } from '@ngrx/store';
import {borrar, clearCompleted, crear, editar, toggle, toggleAll} from './todo.actions';
import {Todo} from './models/todo.model';
import {state} from '@angular/animations';


export const initialState: Todo[] = [
  new Todo('Primer todo')
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
  on(clearCompleted, (state) => state.filter( todo => !todo.completado)),
  on(toggleAll, (state, { value }) => {
    return state.map( (todo) =>{
     return { ...todo, completado: value }
    })
  }),
  on(borrar, (state, { id }) => {
    return state.filter( todo => todo.id !== id );
  } ),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          // "[...state, new Todo( texto )]" --> Esto permite crear un nuevo array
          //  con los contenidos que tenia state y un nuevo Todo recién creado
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),
  on(editar, (state, { id, texto }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    })
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
