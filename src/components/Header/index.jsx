import './index.css';
import Navbar from '../Navbar';
import ProfileIcon from '../ProfileIcon';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to={'/'}>
            <div className='logo'>
                <img src="/src/assets/react-games-logo.svg" alt="react-games-logo" />
            </div>
            </Link>

			<Navbar />
			<ProfileIcon />
		</header>
	);
}
