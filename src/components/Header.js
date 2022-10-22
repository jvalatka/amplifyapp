import { Link, NavLink } from "react-router-dom";
import logo from "../assets/valatka_logo_2006_300x.png";

export default function Header() {
	const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

	return (
		<header className="container">
			<Link to="/">
				<img className="logo" src={logo} alt="Valatka.com logo" title="Valatka.com | Home" />
			</Link>

			<nav>
		        <NavLink to="/" className={getClass}>
		        	Home
        	  	</NavLink>
        		<NavLink to="/jay" className={getClass}>
          			Jay
        		</NavLink>
        		<NavLink to="/jacquie" className={getClass}>
          			Jacquie
        		</NavLink>
        		<NavLink to="/jeremy" className={getClass}>
          			Jeremy
        		</NavLink>
        		<NavLink to="/jessica" className={getClass}>
          			Jessica
        		</NavLink>
			</nav>
		</header>
	);
}