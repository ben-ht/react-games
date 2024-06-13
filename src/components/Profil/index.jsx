import useUser from '../../hooks/useUser';
import './index.css';
import useJwt from '../../hooks/useJwt';
import { useNavigate } from 'react-router-dom/dist';
import View from './view';

export default function Profil() {
	const { user, setUser } = useUser();
	const { jwt, setJwt } = useJwt();

	const navigate = useNavigate();

	return (
		<View
			user={user}
			setUser={setUser}
			jwt={jwt}
			setJwt={setJwt}
			navigate={navigate}
		/>
	);
}
