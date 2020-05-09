// We want this reducer to return an array of todo objects. Therefore, we need to import `ITodo` interface from relevant action we have already created.
import { ITodo, IFetchTodosAction } from '../actions/index';
import { ActionTypes } from '../actions/types';
// Here by using of `IFetchTodosAction` interface, we know that `action` argument is always going to be some object that has a `payload` that is an array of `Todo`.
export const todosReducer = (
	state: ITodo[] = [],
	action: IFetchTodosAction
) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;

		default:
			return state;
	}
};
