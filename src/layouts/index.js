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
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import DashboardLayout from './Dashboard';
import LoginLayout from './Login';
import MainLayout from './Main';
// Admin views
import ExampleAdminView1 from '../views/admin/Example1';
import ExampleAdminView2 from '../views/admin/Example2';
import rootReducer from '../reducers';
import THEME from '../constants/theme';

// eslint-disable-next-line no-underscore-dangle
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const composeEnhancers = devToolsExtension ? devToolsExtension() : compose;

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(thunk)),
);

const router = createBrowserRouter([
  { path: '/', element: <div>Hello world!</div> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'example1',
        element: <ExampleAdminView1 />,
      },
      {
        path: 'example2',
        element: <ExampleAdminView2 />,
      },
    ],
  },
  { path: '/login', element: <LoginLayout /> },
  { path: '/main', element: <MainLayout /> },
]);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

export default App;
