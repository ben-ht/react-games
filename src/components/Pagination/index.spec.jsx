import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useState } from 'react';

import View from './index';

describe('Pagination', () => {
	it('The previous button is disabled when on page 1',),
		() => {
            const [page, setPage] = useState(1);
			const result = render(<View page={page} setPage={setPage} />);
            const previousBtn = result.container.querySelector('#previous-page');
            const nextBtn = result.container.querySelector('#next-page');

            expect(previousBtn).toBeDisabled();
            fireEvent.click(nextBtn);
            expect(nextBtn).not.toBeDisabled();
		};
});
