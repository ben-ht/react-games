import useJwt from '../../hooks/useJwt';
import { useNavigate } from 'react-router-dom/dist';
import View from './view';

export default function Register() {
	const { jwt, setJwt } = useJwt();
	const navigate = useNavigate();

	return <View setJwt={setJwt} jwt={jwt} navigate={navigate} />;
}
