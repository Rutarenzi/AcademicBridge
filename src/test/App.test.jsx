import { screen, render } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("App testing", () => {
    it("should contain the text 'Hello world'", async () => {
        render(<App />);
        const text = await screen.findByText(/Hello world/i);
        expect(text).toBeInTheDocument();
    });
});
