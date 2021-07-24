import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App';
import App2 from './App2';
import { store } from './state';
import { Provider } from 'react-redux';

// one global state by redux style guide
// use with provider to access state
// can use with more than 1 react app

ReactDOM.render(
	<Provider store={store}>
		<App1 />
	</Provider>,
	document.getElementById('app1'),
);

ReactDOM.render(
	<Provider store={store}>
		<App2 />
	</Provider>,
	document.getElementById('app2'),
);
