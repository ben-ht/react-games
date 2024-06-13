import { useState } from 'react';
import { createUser } from '../../business/user';
import { Link } from 'react-router-dom';

export default function Register({ jwt, setJwt, navigate }) {
	const [user, setUser] = useState({
		username: '',
		password: '',
		confirmationPassword: '',
	});

	const [button, setButton] = useState(true);
	const [isEqual, setIsEqual] = useState(null);

	const handleInputChange = (event) => {
		event.preventDefault();
		let { name, value } = event.target;
		if (name === 'username') {
			if (value.trim() == '') {
				value = '';
			}
		}
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

	async function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleCreateUser();
		}
	}

	async function handleCreateUser() {
		let newJwt = await createUser(user);
		setJwt(newJwt);
		localStorage.setItem('jwt', jwt);
		if (newJwt) {
			navigate('/');
		}
	}

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
							onKeyDown={handleKeyDown}
						/>
						{isEqual && user.confirmationPassword !== '' ? (
							<i>Password must be identical</i>
						) : (
							<i>Password confirmation</i>
						)}
					</div>
					<div className="links">
						<Link to="/login">Sign In</Link>
					</div>
					<button disabled={button} onClick={handleCreateUser}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
