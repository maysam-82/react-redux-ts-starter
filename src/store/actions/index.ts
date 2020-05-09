import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
// Define an interface that describe the structure of a todo that we get back from an Api.
interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}
// This interface is going to describe the action object ({type: ... , payload: ...})
interface IFetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: ITodo[];
}

const rootUrl = 'http://jsonplaceholder.typicode.com/todos';
export const fetch = () => {
	return async (dispatch: Dispatch) => {
		// get function is a generic type. by adding <ToDo[]> as a type, we tell typescript that inside response.data we will have an array of objects that satisfy the IToDo interfance.
		const response = await axios.get<ITodo[]>(rootUrl);
		// It is optional only for better error checking.
		// What the `IFetchTodosAction` generic type does is making sure that we are always passing in an object with correct types and properties.
		dispatch<IFetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data,
		});
	};
};
