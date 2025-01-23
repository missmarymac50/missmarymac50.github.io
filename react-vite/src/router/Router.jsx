import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Gallery from '../components/Gallery';

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
        element: <Gallery />,
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
