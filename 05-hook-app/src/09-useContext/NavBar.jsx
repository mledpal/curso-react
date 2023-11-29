import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					useContext
				</Link>

				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<NavLink to='/' className={"nav-link"}>
							Home
						</NavLink>
						<NavLink to='/about' className={"nav-link"}>
							About
						</NavLink>
						<NavLink to='/login' className={"nav-link"}>
							Login
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
