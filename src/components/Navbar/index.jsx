import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/games'}>All games</Link></li>
            </ul>
        </nav>
    );
}