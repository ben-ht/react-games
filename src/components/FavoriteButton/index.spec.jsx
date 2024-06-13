import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import View from './index';
import JwtContextProvider from '../../context/JwtContext';
import UserContextProvider from '../../context/UserContext';

let game = {
	id: 123,
};

let isDetail = false;

describe('FavoriteButton', () => {
	it('It renders', () => {
		const result = render(
			<JwtContextProvider>
				<UserContextProvider>
					<View game={game} isDetail={isDetail} />
				</UserContextProvider>
			</JwtContextProvider>,
		);
		const favButton =
			result.container.getElementsByClassName('favorite-button');
		assert(favButton !== undefined);
	});
});
