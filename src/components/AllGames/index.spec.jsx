import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import View from './index';


let games = [
    {
        id : 1
    },
    {
        id : 2
    }
];

describe('AllGames', () => {
	it('It renders', () => {
		const result = render(
            <View 
                games={games} 
                loading={false} 
                setLoading={false} 
                page={1} 
                setPage={1} />
        );
		const gameCards = result.container.getElementsByClassName('ant-card');
        assert(gameCards.length === 2);
	});

    it('It renders without games', () => {
        const result = render(
            <View 
                games={[]} 
                loading={false} 
                setLoading={false} 
                page={1} 
                setPage={1} />
        );
        expect(screen.getAllByAltText(new RegExp('No games found', 'i'))[0]).toBeInTheDocument();
    });
});
