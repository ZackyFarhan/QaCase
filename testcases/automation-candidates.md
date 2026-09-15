# Automation Candidates

## Why Playwright + TypeScript

I chose Playwright with TypeScript because the assignment asks for web automation examples and the product has several repeatable browser flows. Playwright also gives useful network assertions, tracing, screenshots, and an HTML report without adding a large framework around it.

I would keep the automated suite small at first and expand it after the real application and test data are available.

## First cases to automate

| Priority | Case | Reason |
|---|---|---|
| P0 | Valid sign-in / tenant lookup | Authentication is a basic prerequisite for the application. |
| P0 | Bootstrap requests for `/user/me` and `/tenant/master` | These calls are explicitly part of the sign-in flow and are useful regression signals. |
| P1 | Equipment Inspection opens the configured form | Dynamic form rendering is one of the main product behaviors. |
| P1 | Required inspection field validation | Prevents incomplete inspection records when a field is configured as required. |
| P0 | Hazard mandatory-field validation | The hazard flow has several explicitly mandatory fields and is safety-related. |
| P0 | Hazard submission creates the follow-up task | Verifies the main business action, not just the UI. |
| P1 | Resolution Date validation | A required field in the follow-up flow. |
| P1 | Co Observer can be added | Dynamic controls are easy to break during UI changes. |

## What I would keep manual initially

- Push notification delivery between different users/devices.
- Camera/gallery and image-picker behavior across devices.
- Offline recovery and sync behavior, especially when network state changes during submission.
- Visual checks for progress indicators and the first-time restart prompt.
- Exploratory testing with different dynamic-form configurations.

Once the application is available, I would add API-level checks separately rather than making every UI test depend on implementation details.
