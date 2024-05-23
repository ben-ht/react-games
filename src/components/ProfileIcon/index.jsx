import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import useJwt from '../../hooks/useJwt';
import useUser from '../../hooks/useUser';

export default function ProfileIcon(isConnected) {
	isConnected = false;
	const { jwt, setJwt } = useJwt();
	const { setUser } = useUser();
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

  const { jwt, setJwt } = useJwt();

  if (jwt) {
    isConnected = true;
  }

  return (
    <View isConnected={[isConnected, setJwt]} />
  );
}
