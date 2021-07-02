import { createReducer, on } from '@ngrx/store';
import {filtrar, filtrosValidos} from './filtro.actions';


export const initialState: filtrosValidos = 'todos';

// @ts-ignore
const _filtroReducer = createReducer<filtrosValidos>(
  initialState,
  on( filtrar , (state, { filtro }) => filtro ),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
