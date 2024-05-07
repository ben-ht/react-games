import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to={'/'}>All games</Link>
				</li>
				<li>
					<Link to={'/profile'}>Favourites</Link>
				</li>
			</ul>
		</nav>
	);
}
