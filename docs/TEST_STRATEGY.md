# WeMine QA Test Strategy

## 1. Approach

I would use a risk-based approach. The first focus is the sign-in/bootstrap flow, the dynamic inspection form, and the hazard workflow because these areas combine core access, data integrity, and safety-related business behavior.

## 2. Coverage

### Sign In

- Username and tenant lookup.
- Microsoft authentication hand-off.
- `/user/me` and `/tenant/master` calls.
- Master-data loading/progress.
- First-time restart prompt.
- Failure and slow-network behavior.

### Equipment Inspection

- Form Code and dynamic field rendering.
- Text, date, select, radio (maximum four options), and image fields.
- 50-field boundary.
- Validation for fields configured as required.
- Submission and persistence.
- Poor/no-network behavior.

### Safety Hazard

- Mandatory Location, Sublocation, Area, Evidence, and PIC.
- Optional Area Description.
- PIC defaulting to the reporter.
- Hazard creation and follow-up task generation.
- Notifications to the PIC and people in the area.
- Follow-up evidence, Resolution Date, and Co Observer.
- Direct Supervisor notification.

## 3. Test levels

- **UI/E2E:** main user journeys and important validations.
- **API/integration:** critical request/response behavior where API access is available.
- **Exploratory/device testing:** image capture, offline behavior, permissions, and network changes.
- **Regression:** a small Playwright suite on each build after the selectors and test data are stable.

## 4. Release focus

At minimum I would expect all P0 cases to pass, with P1 coverage executed for the release scope and no open Critical/Blocker issue affecting the tested flows.

## 5. Questions to clarify before execution

The requirement does not define exact validation messages, which inspection fields are required, offline sync rules, authentication test accounts, API response contracts, or exact UI selectors. I would confirm these with Product/Engineering before treating the automated examples as a final regression suite.
