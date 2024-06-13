import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

export default function ProfileIcon({ isConnected, setJwt, setUser }) {
	const logout = () => {
		setJwt();
		setUser();
		localStorage.removeItem('jwt');
	};

	const items = [
		{
			key: '1',
			label: <Link onClick={logout}>Logout</Link>,
		},
	];

	if (isConnected) {
		return (
			<Dropdown menu={{ items }} style={{ width: 'max-content' }}>
				<a onClick={(e) => e.preventDefault()}>
					<div className="profile-icon">
						<img src="/src/assets/user-icon.svg" />
					</div>
				</a>
			</Dropdown>
		);
	}

	return (
		<div className={'signin-navbar'}>
			<Link to={'/login'}>Sign in</Link>
		</div>
	);
}
