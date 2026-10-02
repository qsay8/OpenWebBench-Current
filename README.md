# OpenWebBench

**A small, open-source browser compatibility test lab for everyday web interfaces.**

OpenWebBench is a self-contained demo application and automated test suite for checking common browser behaviours: responsive layout, form validation, keyboard interaction, local UI state, and accessible status messages. It is designed to help contributors reproduce browser-specific bugs and add regression tests.

## Why it exists

Small web projects often test only the browser available to the maintainer. OpenWebBench provides a transparent baseline that contributors can run locally and, where available, across different browsers and operating systems.

## Features

- Responsive interface with mobile and desktop layouts
- Accessible form labels, keyboard-operable controls, and live status feedback
- Client-side validation and predictable state updates
- Playwright smoke and interaction tests
- No backend, account, analytics, or external runtime dependencies

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run serve
```

Open http://localhost:4173.

## Run tests

```bash
npx playwright install
npm test
```

Tests run in Chromium, Firefox, and WebKit locally. Browser availability depends on the host operating system and installed Playwright browsers.

## Browser compatibility

OpenWebBench is designed to run the same automated test suite across different browser engines and operating systems.

The project currently uses Playwright for local Chromium, Firefox, and WebKit testing. The planned testing architecture also supports self-hosted workers, including a macOS worker for genuine Safari testing using Safari WebDriver.

Browser-specific test infrastructure is intended to remain independent of any particular commercial testing provider.

## Contributing

Issues and pull requests are welcome. Please include browser name/version, operating system/device, steps to reproduce, expected behaviour, and actual behaviour for compatibility bugs. See `CONTRIBUTING.md`.

## Roadmap

- Add a self-hosted macOS testing worker
- Add genuine Safari WebDriver testing
- Add visual regression snapshots after establishing stable baselines
- Expand keyboard and screen-reader-oriented checks
- Add reproducible test cases for reported browser bugs

## Licence

MIT. See `LICENSE`.

