import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Timeline from './components/Timeline/Timeline';
import Homepage from './pages/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element: <Homepage />,
        children: [
          { path: 'main', element: <Timeline /> }
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

