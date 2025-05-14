# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
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

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Testing

This project uses Playwright for end-to-end testing across multiple browsers and screen sizes.

### Running Tests

```bash
# Run all tests
npm test

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests in headed mode (visible browser)
npm run test:headed
```

### Test Structure

Tests are located in the `tests` directory. The tests are configured to run on:

- Desktop browsers: Chrome, Firefox, Safari
- Mobile browsers: Chrome on Pixel 5, Safari on iPhone 12

The tests verify:

- Basic functionality across all browsers
- Responsive design on different screen sizes
- Navigation between pages

### Adding New Tests

To add new tests, create new `.spec.ts` files in the `tests` directory following the patterns in the example tests.
