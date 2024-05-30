import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import View from './index';

describe('ProfileIcon', () => {
	it('It renders when not logged in'),
		() => {
			render(<View />);
			expect(
				screen.getAllByText(new RegExp('Sign In', 'i'))[0]).toBeInTheDocument();
		};
});
