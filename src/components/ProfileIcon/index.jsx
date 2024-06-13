import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import useJwt from '../../hooks/useJwt';
import useUser from '../../hooks/useUser';

export default function ProfileIcon() {
	let isConnected = false;
	const { jwt, setJwt } = useJwt();
	const { setUser } = useUser();
	const logout = () => {
		setJwt();
		setUser();
		localStorage.removeItem('jwt');
	};

	return <View isConnected={[isConnected, setJwt]} />;
}
