# Vitest Ext - Root/Include Bug

`root` field is not appended to `include` paths.

# Getting Started

To run locally:

1. Install `node v20`.
2. Install `yarn v4`.

To run with Docker CLI:

1. Run `docker/build`.
2. Run `docker/launch`.

To run with VSCode Dev Containers:

1. Run `docker/build`.
2. In VSCode, run `Reopen in Container`.

# Usage

1. Run `npm install`.
2. Run `npm run test`.
3. See that through the script, `vitest` only sees one test file inside `src` folder.
4. In the `Testing` view, can see that the test outside of `src` folder is also available.
