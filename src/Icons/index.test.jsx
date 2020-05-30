import React from "react";
import { render } from "@testing-library/react";
import Icons from "./index";

const consoleSpy = jest.spyOn(console, "error").mockImplementation();

describe("Loading component", () => {
    beforeEach(() => {
        consoleSpy.mockClear();
    });
    it("renders without crashing", () => {
        const component = render(<Icons name="home" />);

        expect(component).toBeTruthy();
        expect(console.error).toBeCalledTimes(0);
    });
});
