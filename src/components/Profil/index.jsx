import useUser from '../../hooks/useUser';
import './index.css';
import GameCard from '../GameCard';
import { Popconfirm, Button, message } from 'antd';
import { deleteUser } from '../../business/user';
import useJwt from '../../hooks/useJwt';
import { useNavigate } from 'react-router-dom/dist';

export default function Profil() {
	const { user, setUser } = useUser();
	const { jwt, setJwt } = useJwt();

	const navigate = useNavigate();

	const confirm = async (e) => {
		e.preventDefault();
		message.success('User deleted');
		await deleteUser(jwt);
		localStorage.removeItem('jwt');
		await setUser();
		await setJwt();
		await navigate('/');
	};
	const cancel = () => {
		message.error('User not deleted');
	};

	return (
		<div>
			<div className="title-part">
				<h1>Hello {user?.name}</h1>
				<Popconfirm
					title="Delete you account ?"
					description="Are you sure to delete your account?"
					onConfirm={confirm}
					onCancel={cancel}
					okText="Yes"
					cancelText="No"
					className="button-delete"
				>
					<Button danger>Delete</Button>
				</Popconfirm>
			</div>
			<h2>Here is your favorites games list</h2>
			<div className="top-games-container">
				{user?.favorites && user?.favorites.length !== 0 ? (
					user?.favorites.map((game) => (
						<GameCard key={game?.id} game={game} />
					))
				) : (
					<p>No game add to favorite</p>
				)}
			</div>
		</div>
	);
}
