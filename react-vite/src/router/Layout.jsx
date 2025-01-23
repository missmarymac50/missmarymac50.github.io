import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <div id='navbar'>
        <div>
          <Link to='/'>MISS MARY MAC</Link>
        </div>
        <div>
          <NavLink to='/' viewTransition>
            Home
          </NavLink>
          <NavLink to='/bio' viewTransition>
            Biography
          </NavLink>
          <NavLink to='/gallery' viewTransition>
            Gallery
          </NavLink>
          <NavLink to='/reel' viewTransition>
            Reel
          </NavLink>
        </div>
      </div>
      <main id='page'>
        <Outlet />
      </main>
    </>
  );
}
