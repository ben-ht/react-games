import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import View from './index';

let title = 'Player ratings';
let rating = 80;
let ratingCount = 142;

describe('GameRatings', () => {
	it('It renders', () => {
		const result = render(
			<View title={title} rating={rating} ratingCount={ratingCount} />,
		);
		expect(
			screen.getAllByText(new RegExp('Player ratings', 'i'))[0],
		).toBeInTheDocument();
		expect(
			screen.getAllByText(new RegExp(ratingCount + ' votes', 'i'))[0],
		).toBeInTheDocument();

		const fullStars = result.container.querySelectorAll(
			'.ant-rate-star-full',
		);
		assert(fullStars.length > 0);
	});
});
