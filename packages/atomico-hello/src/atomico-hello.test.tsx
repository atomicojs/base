import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { AtomicoHello } from "./atomico-hello";

describe("AtomicoHello", () => {
    it("render", async () => {
        const component = fixture(<AtomicoHello />);
        expect(component).to.be.an.instanceof(AtomicoHello);
    });
});
