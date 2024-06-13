import { fireEvent, render } from '@testing-library/react';
import { describe, it } from 'vitest';

import View from './index';

let screenshots = [
	{
		id: 28312,
		url: 'http://test.com/1.png',
	},
	{
		id: 24542,
		url: 'http://test.com/2.png',
	},
	{
		id: 13980,
		url: 'http://test.com/3.png',
	},
];

describe('GameCarousel', () => {
	it('It renders', () => {
		const result = render(<View screenshots={screenshots} />);

		const activeSlide = result.container.querySelector('.slick-active img');
		assert(activeSlide !== undefined);
	});

	it('It changes the active slide when clicking on a thumbnail', () => {
		const result = render(<View screenshots={screenshots} />);

		const activeSlide = result.container.querySelector('.slick-active img');

		const firstThumbnail = result.container.querySelectorAll(
			'.game-screenshot-preview-container img',
		)[0];
		fireEvent.click(firstThumbnail);
		assert(activeSlide.id == firstThumbnail.id);

		const lastThumbnail = result.container.querySelectorAll(
			'.game-screenshot-preview-container img',
		)[2];
		fireEvent.click(lastThumbnail);
		assert(activeSlide.id == firstThumbnail.id);
	});
});
