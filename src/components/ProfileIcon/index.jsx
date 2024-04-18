import { Dropdown } from 'antd';
import './index.css';

export default function ProfileIcon(isConnected){
    isConnected = true;
    const items = [
        {
            key: '1',
            label: (
                <a href='/profile'>My Profile</a>
            ),
        },
        {
            key: '2',
            label: (
                <a href='/logout'>Logout</a>
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