import { Link, Outlet } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="title nav-item nav-link">
              <div className="title">
                <Link to="/about">About</Link>
              </div>
            </li>
            <li className="nav-item nav-link">
              <div className="title">
                <Link to="/">Dashboard</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
