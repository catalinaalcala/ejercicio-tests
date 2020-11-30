import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <Like/>,
        container
      );
    });
  });
  
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

describe("Testing Like component", () => {
    it("Defaults to 'Likes: 0'", () => {
        const p = container.querySelector("p");
        expect(p.textContent).toBe("Likes: 0");
    });

    it("Button like", () => {
        const button = container.querySelector("#increment");
        const p = container.querySelector("p");

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(p.textContent).toBe("Likes: 1");
    });

    it("Button dislike", () => {
        const button = container.querySelector("#decrement");
        const p = container.querySelector("p");

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(p.textContent).toBe("Likes: -1");
    })
});