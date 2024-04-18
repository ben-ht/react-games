import './index.css'
import Navbar from '../Navbar';
import ProfileIcon from '../ProfileIcon';

export default function Header() {
    return (
        <header>
            <a href='#'>
            <div className='logo'>REACT GAMES</div>
            </a>

            <Navbar />
            <ProfileIcon />
        </header>
    );
}