import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="container">
        <div className="header-row">
          <a>
            <Link to="/about">About</Link>
          </a>
          <a>
            <Link to="/">Catalog</Link>
          </a>
        </div>
        <div className="page-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
