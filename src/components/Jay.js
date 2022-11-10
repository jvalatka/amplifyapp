import Button from 'react-bootstrap/Button';
import { Link, Outlet } from "react-router-dom";

export default function Jay() {
  return (
    <div className="container">
      <>
        <Link to="/jay">
          <Button variant="" size="lg">
            About
          </Button>
        </Link>
        {' '}
      </>
      <Outlet />
    </div>
  );
}
