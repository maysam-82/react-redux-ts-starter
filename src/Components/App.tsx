import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos } from '../store/actions';
import { IStoreState } from '../store/reducers';

interface IAppProps {
	todos: ITodo[];
	fetchTodos(): any;
}

class _App extends React.Component<IAppProps> {
	componentDidMount() {
		this.props.fetchTodos();
	}
	render() {
		console.log(this.props.todos);
		return <div>Hi There</div>;
	}
}

// `mapStateToProps` is going to be called with our entire redux store state. Therefore, we need to provide an annotation for state. This function is goint to return an object with name `todos` and value type of `ITodo[]`
const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
