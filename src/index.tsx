import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from './Reducers';
import * as serviceWorker from './serviceWorker';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}


const store = createStore(
	reducers, 
	{}, 
	composeWithDevTools(
	applyMiddleware(reduxThunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <div>Hello World!</div>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
