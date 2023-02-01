import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">New Company</Link>
        </li>
      </ul>
    </nav>
  );
}
