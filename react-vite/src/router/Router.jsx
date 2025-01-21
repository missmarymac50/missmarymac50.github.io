import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/bio',
        element: <h1>Biography</h1>,
      },
      {
        path: '/gallery',
        element: <h1>Gallery</h1>,
      },
      {
        path: '/reel',
        element: <h1>Reel</h1>,
      },
      { path: '/:pagename', element: <h1>Page Not Found</h1> },
    ],
  },
]);

export default router;
