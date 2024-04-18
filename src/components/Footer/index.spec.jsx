import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import View from './index';

describe('Footer', () => {
    it ('It renders', () => {
        render (<View />);
        expect(screen.getAllByText(new RegExp('© React Games 2024 - All rights reserved.', 'i'))[0]).toBeInTheDocument();
    })
})