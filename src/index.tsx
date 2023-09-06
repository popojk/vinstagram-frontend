import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Authentication from './authentication/Authentication';
import Timeline from './components/Timeline/Timeline';
import Homepage from './pages/Homepage/Homepage';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'home',
        element: <Homepage />,
        children: [
          { path: 'main', element: <Timeline /> }
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

