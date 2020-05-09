// In redux we do not care about assigning an string to action types. The only requirement of types in a redux action is that it must be a unique value

export enum ActionTypes {
	fetchTodos,
}
// This is default behavior and will turn to:
// export enum ActionTypes {
//   fetchTodos = 0,
//   anotherAction = 1,
//   nextAction = 2,
// ...
// }
