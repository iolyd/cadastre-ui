# Cadastre

**A customizable Svelte UI system with a compositional mindset.**

🚧 Under construction 🚧

The Cadastre ui library is built using [Svelte](https://svelte.dev/) components and [Vanilla Extract](https://vanilla-extract.style/)-driven styles.

## Usage

### Installing

To use Cadastre, simply install its package:

```sh
npm install cadastre-ui
```

and then include the provided vite plugin in your project's `vite.config.plugins` array:

```ts
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import cadastre, { type CadastreConfig } from 'cadastre-ui/plugin';

const config: UserConfig = {
  plugins: [cadastre(), sveltekit()],
};

export default config;
```

### Customizing

You can easily customize the library's colors along with other generic styling properties using your own color theme(s), size charts, and detailing properties:

```ts
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import cadastre, { type CadastreConfig } from 'cadastre-ui/plugin';

const myCadastreConfig: CadastreConfig = {
  // Styles customization and more...
};

const config: UserConfig = {
  plugins: [cadastre(myCadastreConfig), sveltekit()],
};

export default config;
```

## Components

### Scripts

_To do_

### Templates

_To do_

### Styles

_To do_

## Actions

<!--
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
-->
