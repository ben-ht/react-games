import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

export default function ProfileIcon(isConnected){
    isConnected = true;
    const items = [
        {
            key: '1',
            label: (
                <Link to={'/profile'}>My Profile</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to={'/logout'}>Logout</Link>
            ),
        }
    ]
    if (isConnected) {
        return (
            <Dropdown menu={{items}} style={{width: 'max-content'}}>
                <a onClick={(e) => e.preventDefault()}>
                <div className='profile-icon'>
                    <img src='/src/assets/user-icon.svg'/>
                </div>
                </a>
            </Dropdown>
        );
    }

    return (
        <div className='profile-icon'>
            <div>Icon</div>
        </div>
    );
}