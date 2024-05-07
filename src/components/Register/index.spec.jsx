import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Register from './index';

describe('Register', () => {
	it('It renders'),
		() => {
			render(<Register />);
			expect(
				screen.getAllByText(new RegExp('Register Component', 'i'))[0],
			).toBeInTheDocument();
		};
});
