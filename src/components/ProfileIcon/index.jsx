import './index.css';
import useJwt from '../../hooks/useJwt';
import useUser from '../../hooks/useUser';
import View from './view';

export default function ProfileIcon() {
	const { jwt, setJwt } = useJwt();
	const { setUser } = useUser();

	let isConnected = jwt ? true : false;

	return <View isConnected={isConnected} setJwt={setJwt} setUser={setUser} />;
}
