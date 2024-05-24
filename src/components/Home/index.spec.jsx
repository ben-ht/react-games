import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import View from './index';
import { MemoryRouter } from "react-router-dom";
import JwtContextProvider from "../../context/JwtContext";

describe('Header', () => {
    it ('It renders', () => {
        render (
            <JwtContextProvider>
                <MemoryRouter>
                    <View />
                </MemoryRouter>
            </JwtContextProvider>
        );
        expect(screen.getByAltText(new RegExp('react-games-logo', 'i'))).toBeInTheDocument();
    })
})