import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../components/Home';
import Bio from '../components/Bio';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/bio',
        element: <Bio />,
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
