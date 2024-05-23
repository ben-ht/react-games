import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import View from './index';
import { MemoryRouter } from "react-router-dom";

let game = {
    id: 28312,
    name: "The Legend of Zelda: Ocarina of Time",
    storyline: `The Legend of Zelda: Ocarina of Timeis a 
    1998 action-adventure game developed and published by 
    Nintendo for the Nintendo 64. It was released in Japan 
    and North America in November 1998 and in PAL regions 
    the following month. Ocarina of Time is the first game 
    in The Legend of Zelda series with 3D graphics.`
}

describe('GameCard', () => {
    it ('It renders', () => {
        render(
            <MemoryRouter>
                <View game={game}/>
            </MemoryRouter>
        );
        expect(screen.getAllByText(new RegExp(game.name, 'i'))[0]).toBeInTheDocument();
        expect(screen.getAllByText(new RegExp(game.storyline.substring(0, 30), 'i'))[0]).toBeInTheDocument();
    })
})