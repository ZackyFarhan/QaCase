# Playwright Automation

The automation examples use Playwright with TypeScript and Chromium.

## Why Playwright

Playwright is used for the web automation examples because the WeMine flows include dynamic forms, user interactions, and requests to backend services during sign-in. The built-in trace, screenshot, video, and HTML report are also useful when investigating failures.

## Project structure

```text
automation/
├── pages/
│   ├── sign-in.page.ts
│   ├── equipment-inspection.page.ts
│   └── hazard.page.ts
├── tests/
│   ├── sign-in.spec.ts
│   ├── equipment-inspection.spec.ts
│   └── safety-hazard.spec.ts
├── utils/
│   └── env.ts
├── .env.example
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Setup

```bash
cd automation
npm install
npx playwright install chromium
```

Create `.env` from `.env.example` and provide the test environment values.

```env
BASE_URL=https://your-wemine-environment.example.com
WEMINE_USERNAME=your-test-username
WEMINE_PASSWORD=your-test-password
```

Run the tests:

```bash
npm test
```

Run with the browser visible:

```bash
npm run test:headed
```

## Important note

The assignment does not provide a WeMine test URL, credentials, or application DOM. Therefore, the examples are written against the documented flows and use accessible locators where possible. The selectors and authentication setup should be adjusted after the real test environment is available.
