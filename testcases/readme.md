# Test Cases

## Scope

I split the requirements in `case.md` into three areas:

1. Flow 0 — Sign In and initial master-data loading
2. Flow 1 — Equipment Inspection
3. Flow 2 — Safety Hazard and follow-up

The cases focus first on business-critical behavior, validation, data integrity, and the parts of the product that are most likely to regress: dynamic forms, network-dependent loading, and the hazard follow-up flow.

## Priority

- **P0 — Critical:** authentication or safety workflow is blocked, or data could be created incorrectly.
- **P1 — High:** a main business flow or mandatory rule is broken.
- **P2 — Medium:** useful functional/edge coverage with lower release risk.
- **P3 — Low:** cosmetic or low-impact behavior.

## Status

All cases are marked **Not Run** because the assignment does not provide a test environment or credentials. I did not mark cases as passed based only on the written requirements.

## Automation approach

I would automate stable, repeatable checks first:

- authentication/bootstrap requests that can be observed from the web application
- dynamic inspection form rendering
- mandatory validation
- hazard creation and follow-up validation
- small regression checks that are useful on every build

I would keep device-specific image handling, real push notifications, offline exploratory testing, and visual checks primarily manual until the application behavior is known.

The detailed cases are in `manual-test-cases.xlsx`. The Markdown/CSV versions are included for easier review and version control.
