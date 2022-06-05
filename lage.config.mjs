/**
 * @type {import("lage").ConfigOptions}
 */
const config = {
    npmClient: "npm",
    pipeline: {
        start: ["start"],
        dev: ["dev"],
        build: ["build"],
        npm: ["npm"],
    },
};

export default config;
