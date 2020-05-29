import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Loading from "./index";

describe("Loading component", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    it("renders without crashing", () => {
        const component = render(<Loading />);

        act(() => {
            jest.runAllTimers();
        });

        expect(component).toBeTruthy();
    });
});
