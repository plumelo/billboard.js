/* eslint-env node */
export default {
	// define all views, along with the main init script, as entry points, so
	// code-splitting can generate the correct chunks
	input: "./repro.js",
	treeshake: true,
	output: {
		dir: "dist",
		format: "esm"
	}
};
