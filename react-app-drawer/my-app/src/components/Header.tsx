import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function Header({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleDrawerClick() {
    setIsOpen(!isOpen);
  }

  let closed: string;
  if (!isOpen) {
    closed = 'closed';
  }

  return (
    <div className="headerRow">
      <div className={`navbar-column ${closed}`}>
        <h2 onClick={handleDrawerClick}>_</h2>
        {menuItems.map((menuItem, index) => {
          return (
            <Link to={menuItem.path}>
              <div className="row" key={index}>
                <img src={menuItem.iconUrl} />
                {isOpen && <h2>{menuItem.name}</h2>}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="content-column">
        <Outlet />
      </div>
    </div>
  );
}
