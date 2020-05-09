import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos, deleteTodo } from '../store/actions';
import { IStoreState } from '../store/reducers';

interface IAppProps {
	todos: ITodo[];
	// Tell react-redux that `fetchTodos` is only a function to avoid having Type annotation error and letting connect function works without any error.
	fetchTodos: Function;
	// Go and find types of deleteTodo and put it here to save time.
	deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<IAppProps> {
	onFetchClickedHandler = (): void => {
		this.props.fetchTodos();
	};

	onDeleteTodo = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map(({ title, id }: ITodo) => {
			return (
				<div
					key={id}
					onClick={() => {
						this.onDeleteTodo(id);
					}}
				>
					{' '}
					{title}
				</div>
			);
		});
	}

	render() {
		console.log(this.props.todos);
		return (
			<div>
				<button onClick={this.onFetchClickedHandler}>Fetch Todos</button>
				{this.renderList()}
			</div>
		);
	}
}

// `mapStateToProps` is going to be called with our entire redux store state. Therefore, we need to provide an annotation for state. This function is goint to return an object with name `todos` and value type of `ITodo[]`
const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
