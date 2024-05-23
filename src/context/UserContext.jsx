import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	let [user, setUser] = useState();
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

UserContextProvider.propTypes = {
	children: PropTypes.string.isRequired,
};
