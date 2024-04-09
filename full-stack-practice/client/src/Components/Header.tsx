import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="row header-row">
        <div className="column-half">
          <Link to="/about">About</Link>
        </div>
        <div className="column-half">
          <Link to="/">Catalog</Link>
        </div>
      </div>
      <div className="row body-row">
        <Outlet />
      </div>
    </>
  );
}
