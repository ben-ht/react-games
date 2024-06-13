import { Link } from 'react-router-dom';
import './index.css';
import useJwt from '../../hooks/useJwt';

export default function Navbar() {
	const { jwt } = useJwt();
	return (
		<nav>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				{jwt ? (
					<li>
						<Link to={'/games'}>All games</Link>
					</li>
				) : null}
				{jwt ? (
					<li>
						<Link to={'/profile'}>Profile</Link>
					</li>
				) : null}
			</ul>
		</nav>
	);
}
