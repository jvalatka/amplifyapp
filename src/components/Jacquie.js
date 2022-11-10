import Button from 'react-bootstrap/Button';
import { Link, Outlet } from "react-router-dom";

export default function Jacquie() {
  return (
    <div className="container">
      <>
        <Link to="/jacquie">
          <Button variant="" size="lg">
            About
          </Button>
        </Link>{' '}
        <Link to="/jacquie/resume">
          <Button variant="" size="lg">
            Resume
          </Button>
        </Link>
      </>
      <Outlet />
    </div>
  );
}
