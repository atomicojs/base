import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { AtomicoBrand } from "./atomico-brand";

describe("AtomicoBrand", () => {
    it("render", async () => {
        const component = fixture(<AtomicoBrand />);
        expect(component).to.be.an.instanceof(AtomicoBrand);
    });
});
