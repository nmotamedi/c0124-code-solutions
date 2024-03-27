import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center text-muted mb-5">
          <Link to="/">
            <h3>Uh oh, we could not find the page you were looking for!</h3>
            Return to the Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
