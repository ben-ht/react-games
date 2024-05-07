import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../business/user';
import useJwt from '../../hooks/useJwt';
import './index.css';
import { useNavigate } from 'react-router-dom/dist';

export default function Login() {
	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const [button, setButton] = useState(true);
	const [unauthorized, setUnauthorized] = useState(false);

	const navigate = useNavigate();
	const handleInputChange = (event) => {
		event.preventDefault();
		setUnauthorized(false);
		const { name, value } = event.target;
		setUser((user) => {
			let newUser = {
				...user,
				[name]: value,
			};
			disableButton(newUser);
			return newUser;
		});
	};

	const disableButton = (user) => {
		if (user.password !== '' && user.username !== '') {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const { jwt, setJwt } = useJwt();

	return (
		<div className="login-form-bg">
			<div className="signin">
				<h2>Sign In</h2>
				<div className="form">
					<div className="input-group">
						<input
							type="text"
							name="username"
							value={user.username}
							onChange={handleInputChange}
							required
						/>
						<i>Username</i>
					</div>
					<div className="input-group">
						<input
							type="password"
							name="password"
							value={user.password}
							onChange={handleInputChange}
							required
						/>
						<i>Password</i>
					</div>
				</div>
				<div className="links">
					<Link to="/register">Sign Up</Link>
				</div>
				<button
					disabled={button}
					type="submit"
					onClick={async () => {
						let newJwt = await loginUser(user).catch(
							setUnauthorized(true),
						);
						setJwt(newJwt);
						localStorage.setItem('jwt', jwt);
						if (newJwt) {
							navigate('/');
						}
					}}
				>
					Submit
				</button>
				{unauthorized ? <p>User or password must be false</p> : null}
			</div>
		</div>
	);
}
