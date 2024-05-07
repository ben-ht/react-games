import { useState } from 'react';
import { createUser } from '../../business/user';
import { Link } from 'react-router-dom';
import useJwt from '../../hooks/useJwt';
import { useNavigate } from 'react-router-dom/dist';

export default function Register() {
	const [user, setUser] = useState({
		username: '',
		password: '',
		confirmationPassword: '',
	});

	const { jwt, setJwt } = useJwt();
	const [button, setButton] = useState(true);
	const [isEqual, setIsEqual] = useState(null);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setUser((user) => {
			let newUser = {
				...user,
				[name]: value,
			};
			disableButton(newUser);
			equalPassword(newUser);
			return newUser;
		});
	};

	const disableButton = (user) => {
		if (
			user.password !== '' &&
			user.confirmationPassword !== '' &&
			user.username !== '' &&
			user.password === user.confirmationPassword
		) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const equalPassword = (user) => {
		if (user.password === user.confirmationPassword) {
			setIsEqual(false);
		} else if (user.password === '' && user.confirmationPassword === '') {
			setIsEqual(null);
		} else {
			setIsEqual(true);
		}
	};

	return (
		<div className="login-form-bg">
			<div className="signin">
				<h2>Sign up</h2>
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
					<div className="input-group">
						<input
							type="password"
							name="confirmationPassword"
							value={user.confirmationPassword}
							onChange={handleInputChange}
							required
						/>
						{isEqual && user.confirmationPassword !== '' ? (
							<i>Must be the same as password</i>
						) : (
							<i>Password confirmation</i>
						)}
					</div>
					<div className="links">
						<Link to="/login">Sign In</Link>
					</div>
					<button
						disabled={button}
						onClick={async () => {
							let newJwt = await createUser(user);
							setJwt(newJwt);
							console.log(jwt);
							localStorage.setItem('jwt', jwt);
							if (newJwt) {
								navigate('/');
							}
						}}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
