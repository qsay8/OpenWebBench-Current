# OpenWebBench

**A small, open-source browser compatibility test lab for everyday web interfaces.**

OpenWebBench is a self-contained demo application and automated test suite for checking common browser behaviours: responsive layout, form validation, keyboard interaction, local UI state, and accessible status messages. It is designed to help contributors reproduce browser-specific bugs and add regression tests.

## Why it exists

Small web projects often test only the browser available to the maintainer. OpenWebBench provides a transparent baseline that contributors can run locally and, when configured, across remote browser/device environments such as BrowserStack.

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

## BrowserStack

This repository is structured so its Playwright tests can be adapted to BrowserStack Automate. BrowserStack credentials must be stored as CI secrets and must never be committed. See `docs/BROWSERSTACK.md` for a safe setup outline. The project does not claim BrowserStack integration is active until credentials and a compatible runner are configured.

## Contributing

Issues and pull requests are welcome. Please include browser name/version, operating system/device, steps to reproduce, expected behaviour, and actual behaviour for compatibility bugs. See `CONTRIBUTING.md`.

## Roadmap

- Add documented BrowserStack Automate execution
- Add visual regression snapshots after establishing stable baselines
- Expand keyboard and screen-reader-oriented checks
- Add reproducible test cases for reported browser bugs

## Licence

MIT. See `LICENSE`.

This project is tested with BrowserStack.
