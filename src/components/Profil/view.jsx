import useUser from '../../hooks/useUser';
import './index.css';
import GameCard from '../GameCard';
import { Popconfirm, Button, message } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { deleteUser } from '../../business/user';
import useJwt from '../../hooks/useJwt';
import { useNavigate } from 'react-router-dom/dist';

export default function Profil({ user, setUser, jwt, setJwt, navigate }) {
	const confirm = async (e) => {
		e.preventDefault();
		message.success('User deleted');
		await deleteUser(jwt);
		localStorage.removeItem('jwt');
		await setUser();
		await setJwt();
		navigate('/');
	};

	return (
		<div className="profile-container">
			<div className="title-part">
				<h1>{user?.name}</h1>
				<Popconfirm
					title={'Delete your account'}
					description="Are you sure you want to delete your account ?"
					onConfirm={confirm}
					okText="Yes"
					cancelText="No"
					className="button-delete"
					icon={<WarningOutlined style={{ color: 'red' }} />}
					placement="right"
				>
					<Button danger>Delete</Button>
				</Popconfirm>
			</div>
			<h2>Your favorites</h2>
			<div className="top-games-container">
				{user?.favorites && user?.favorites.length !== 0 ? (
					user?.favorites.map((game) => (
						<GameCard key={game?.id} game={game} />
					))
				) : (
					<h3>
						You don't have any game in your favorites. Browse our
						games and add some !
					</h3>
				)}
			</div>
		</div>
	);
}
