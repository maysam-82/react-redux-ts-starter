import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { ITodo } from '../actions/index';

// This interface is going to describe the entire state of entire store and pass to the combineReducers as a type. It also tells other developers all the different values and types and properties inside of our store.
export interface IStoreState {
	todos: ITodo[];
}

export const reducers = combineReducers<IStoreState>({
	todos: todosReducer,
});
