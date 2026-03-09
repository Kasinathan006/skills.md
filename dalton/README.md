# Framer Agent CLI

CLI and Agent skill for interacting with Framer projects via the Framer Server API.

## Installation

```bash
npx skills add framer/dalton
```

Then, simply open your preferred agent, ask to interact with your Framer project and the agent will handle the rest.

## CLI Usage

See [skills/framer/SKILL.md](skills/framer/SKILL.md) for full CLI usage and API documentation.

## Local Development

### Bootstrap

Build and symlink to PATH + install skill locally:

```bash
make install-dev
```

### Running with the `make dev` tunnel

Use this when you change something in the server API implementation.

To make the CLI use the local instance of FramerStudio, do the following:

1. Run `make dev` in FramerStudio
2. Clone `FramerHeadlessAPI`, and launch it against the local tunnel: [instructions](https://github.com/framer/FramerHeadlessApi/tree/master?tab=readme-ov-file#framerstudio-tunnel)
3. Make sure you bootsrap ([see the Boostrap section](#bootstrap))
4. When interacting with your agent, run it in this repo, and tell it to load the `framer-local` skill instead of `framer`. (Currently configured only for Claude Code.)

   Alternatively, tell yor agent something like this:

   ```
   Use the framer skill, but use `FRAMER_HEADLESS_SERVER_URL=ws://localhost:8080/channel/headless-plugin framer` (never with @latest) for all commands instead of `npx framer-dalton`
   ```

   (`FRAMER_HEADLESS_SERVER_URL` and other env variables are documented [in `framer-api-devkit`](https://github.com/framer/FramerStudio/blob/master/tools/framer-api-devkit/.env.example).)

### Using the local `framer-api` package

Use this when you change something in the server API _interface_ (e.g. add new API methods).

To make the CLI aware of the updated methods, you need to update the `framer-api` package and regenerate the types:

1. Publish the package with your changes: either make a new PR (a bot will post an `yarn add https://pkg.pr.new/...` command in a comment), or publish it to a local registry like [Verdaccio](https://verdaccio.org/).
2. Install the package locally: `npm install ...`
3. Regenerate types: `make generate-types`

### Removing the local install

```bash
make uninstall-dev
```
