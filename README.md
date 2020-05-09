## What is `tsx` extension?

`tsx` file is any TypeScript file that contains some amount of `jsx`.

## Components Types:

Components types in React are generic types.

```typescript
import React from 'react';
import ReactDOM from 'react-dom';

interface IAppProps {
	color: string;
}

class App extends React.Component<IAppProps> {
	render() {
		return <div>{this.props.color}</div>;
	}
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));
```

The first argument is structure of props we expect to pass. This pattern will be repeated for just about every single class based React component we will create.

## Managing React's state with TS:

If we are going to use `constructor` inside a class, we need to pass an interface as a second argument of React `Component`

```typescript
import React from 'react';
import ReactDOM from 'react-dom';

interface IAppProps {
	color: string;
}

interface IAppState {
	counter: number;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);

		this.state = {
			counter: 0,
		};
	}

	onIncrement = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};
	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};
	render() {
		return (
			<div>
				<button onClick={this.onIncrement}>Increment</button>
				<button onClick={this.onDecrement}>decrement</button>
				{this.state.counter}
			</div>
		);
	}
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));
```

If we use `state` property directly to the class (without constructor), we overwrite the state property defined inside of component and we do not need to use an interface and pass it as a second argument of `Component` class.

```typescript
import React from 'react';
import ReactDOM from 'react-dom';

interface IAppProps {
	color: string;
}

class App extends React.Component<IAppProps> {
state = {
  counter : 0
}

```

Do not mix both of these methods since it will cause bunch of issues in the codes.

## Functional Components in TS:
