import React from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import rootReducer from '../reducers';

// eslint-disable-next-line no-underscore-dangle
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const composeEnhancers = devToolsExtension && devToolsExtension() || compose;

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(thunk)),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;