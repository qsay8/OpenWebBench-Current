# OpenWebBench — Open Source Project

**Project:** OpenWebBench  
**Repository:** https://github.com/qsay8/OpenWebBench-Current  
**Licence:** MIT  
**Primary technology:** HTML, CSS, JavaScript, Playwright  
**Maintainer:** John

## About the project

OpenWebBench is an open-source browser compatibility testing lab designed to make reproducible browser testing easier for developers.

The project provides a small web application together with automated browser tests covering:

- Responsive layouts
- Form validation
- Keyboard navigation
- Accessibility-related interactions
- Interactive UI state
- Desktop browser behaviour
- Mobile browser layouts

The goal is to make it possible to run the same tests across different browsers and environments and identify compatibility regressions that may not appear when testing with only one browser.

## Why macOS infrastructure is needed

macOS is an important testing environment because Apple's Safari browser is only available on Apple platforms.

A Linux or Windows testing machine cannot provide genuine Safari application testing. Access to a physical Apple Silicon Mac would therefore allow OpenWebBench to extend its automated testing infrastructure to include real macOS and Safari testing.

This would complement the existing Chromium and Firefox testing rather than replacing them.

## How the Mac would be used

The Mac would operate as a dedicated OpenWebBench testing worker.

It would be used for:

- Automated macOS browser testing
- Genuine Safari testing
- Chromium testing
- Firefox testing
- Playwright-based automated tests
- Safari WebDriver testing
- Regression testing
- Continuous integration
- Reproducing browser-specific issues
- Developing additional compatibility tests

The worker would be connected to the OpenWebBench project and would run tests against the project's public test application.

The machine would be used for open-source development and browser testing rather than general-purpose computing.

## Requested hardware

The preferred configuration is:

**Apple Silicon Mac mini with 16 GB RAM and 256 GB or more storage.**

I am flexible regarding the exact Apple Silicon generation and would be happy to use an M1, M2, M3, M4, M5, or newer Mac mini if available.

The minimum practical configuration would be:

- Apple Silicon
- 8 GB RAM
- 256 GB storage

16 GB or more RAM is preferred because browser automation can run multiple browser processes simultaneously.

Additional storage is welcome but is not essential.

## Testing architecture

The planned architecture is:

OpenWebBench
  |
  +-- Test application
  |
  +-- Automated test suite
  |
  +-- Self-hosted testing workers
          |
          +-- macOS / Safari
          +-- Chromium
          +-- Firefox

The project is being developed so that testing infrastructure is independent of a particular commercial testing provider.

This makes it possible for contributors and maintainers to operate testing workers on available hardware while keeping the test suite and configuration open source.

## Why this benefits open source

Browser compatibility problems are often difficult to reproduce when developers do not have access to multiple operating systems and browsers.

A dedicated Mac would allow OpenWebBench to provide a genuine macOS testing environment and Safari coverage as part of an open-source project.

The resulting worker configuration, test definitions, and supporting software will remain open source so that other developers can inspect the implementation and contribute additional tests.

This can also make it easier for contributors without Apple hardware to submit compatibility fixes that can subsequently be verified on macOS.

## Open-source commitment

OpenWebBench is released under the MIT licence.

The source code is publicly available on GitHub, and the project is intended to remain open source.

Testing infrastructure and configuration developed specifically for OpenWebBench will be documented publicly where practical.

## Project information

**GitHub repository:**  
https://github.com/qsay8/OpenWebBench-Current

**Licence:**  
MIT

**Current users:**  
The project is newly created and does not yet have an established user base.

**Public demo:**  
The GitHub repository currently serves as the primary public project and development location.

## Short description

OpenWebBench is an MIT-licensed open-source browser compatibility testing lab built with HTML, CSS, JavaScript, and Playwright. It provides reproducible automated tests for browser behaviour and is being developed to support self-hosted testing workers, including genuine macOS and Safari testing on Apple Silicon hardware.
