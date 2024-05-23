import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import View from './index';

let game = {
    id: 28312,
    name: "The Legend of Zelda: Ocarina of Time",
    storyline: `The Legend of Zelda: Ocarina of Timeis a 
    1998 action-adventure game developed and published by 
    Nintendo for the Nintendo 64. It was released in Japan 
    and North America in November 1998 and in PAL regions 
    the following month. Ocarina of Time is the first game 
    in The Legend of Zelda series with 3D graphics.`,
	aggregatedRating: 98.83,
	aggregatedRatingCount: 23,
	rating: 96.02,
	ratingCount: 4376
};

let screenshots = [
    {
        id: 28312,
        url: "http://test.com/1.png"
    },
    {
        id: 24542,
        url: "http://test.com/2.png"
    },
    {
        id: 13980,
        url: "http://test.com/3.png"
    },
]

describe('GameDetails', () => {
    it ('It renders', () => {
        const result = render(
            <View game={game} screenshots={screenshots}/>
        );

        expect(screen.getAllByText(new RegExp(game.name))[0]).toBeInTheDocument();
		expect(screen.getAllByText(new RegExp(game.storyline))[0]).toBeInTheDocument();

		const ratings = result.container.querySelectorAll('.game-ratings');
		assert(ratings !== undefined);

		const carousel = result.container.querySelector('.game-screenshots-carousel');
		assert (carousel !== undefined);
    });
})