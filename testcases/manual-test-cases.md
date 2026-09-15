# Manual Test Cases

## Flow 0 - Sign In

| ID | Priority | Type | Title | Expected Result | Automation | Status |
|---|---|---|---|---|---|---|
| SI-001 | P0 | Functional | Sign in with valid username | Tenant is identified and Microsoft login is opened. | Yes | Not Run |
| SI-002 | P0 | Negative | Unknown username | User is not authenticated and a clear failure/retry path is shown. | Yes | Not Run |
| SI-003 | P1 | Validation | Username is empty | Submission is blocked and username validation is shown. | Yes | Not Run |
| SI-004 | P1 | Validation | Username with leading/trailing spaces | Input is normalized or rejected consistently; no incorrect tenant lookup. | Yes | Not Run |
| SI-005 | P0 | Integration | /user/who tenant lookup succeeds | /user/who is called and tenant context is resolved. | Yes | Not Run |
| SI-006 | P0 | Integration | /user/me is requested after authentication | /user/me is requested and user profile is loaded. | Yes | Not Run |
| SI-007 | P0 | Integration | /tenant/master is requested | /tenant/master is requested and master-data bootstrap starts. | Yes | Not Run |
| SI-008 | P1 | Functional | Master data endpoints show progress | Progress is visible while required master data is loaded. | Yes | Not Run |
| SI-009 | P1 | Functional | First master-data update prompts restart | App prompts user to restart as specified. | No | Not Run |
| SI-010 | P1 | Resilience | Slow network during bootstrap | Progress remains accurate; UI does not appear frozen; eventually recovers. | No | Not Run |
| SI-011 | P0 | Resilience | Backend bootstrap failure | Failure is handled safely and user has actionable retry/error state. | Yes | Not Run |
| SI-012 | P1 | Security | Unauthenticated user cannot access protected app | User is redirected to authentication. | Yes | Not Run |
## Flow 1 - Equipment Inspection

| ID | Priority | Type | Title | Expected Result | Automation | Status |
|---|---|---|---|---|---|---|
| EI-001 | P1 | Functional | Open Equipment Inspection list | Previous submissions are displayed and new submission action is available. | Yes | Not Run |
| EI-002 | P1 | Functional | Create inspection from Form Code | Correct dynamic fields are rendered for selected Form Code. | Yes | Not Run |
| EI-003 | P1 | Functional | Text field renders and accepts input | Value is accepted and retained. | Yes | Not Run |
| EI-004 | P1 | Functional | Date picker renders valid date | Selected date is displayed and stored in expected format. | Yes | Not Run |
| EI-005 | P1 | Functional | Select field options load | Configured options are shown and selection is retained. | Yes | Not Run |
| EI-006 | P1 | Functional | Radio supports up to four options | Configured options are available and only one option can be selected. | Yes | Not Run |
| EI-007 | P1 | Functional | Image picker accepts supported image | Image is attached and preview/state is shown. | No | Not Run |
| EI-008 | P2 | Boundary | Form supports 50 fields | All 50 configured fields render and remain usable. | Yes | Not Run |
| EI-009 | P1 | Boundary | Form with more than 50 fields is rejected or constrained | System enforces documented maximum of 50. | No | Not Run |
| EI-010 | P1 | Validation | Required dynamic field cannot be empty | Submission is blocked with validation. | Yes | Not Run |
| EI-011 | P1 | Functional | Valid inspection can be submitted | Submission succeeds and appears in previous submissions. | Yes | Not Run |
| EI-012 | P0 | Data integrity | Submitted values persist after refresh | Saved values match submitted values. | Yes | Not Run |
| EI-013 | P1 | Resilience | Inspection submission under poor network | User gets clear progress/retry behavior; duplicate record is not created. | No | Not Run |
| EI-014 | P1 | Offline | Create/edit behavior with no network | App follows offline capability without losing entered data. | No | Not Run |
| EI-015 | P2 | Compatibility | Previously configured form remains readable after configuration change | Historical submission remains readable and data is not corrupted. | No | Not Run |
## Flow 2 - Safety Hazard Report

| ID | Priority | Type | Title | Expected Result | Automation | Status |
|---|---|---|---|---|---|---|
| HZ-001 | P0 | Functional | Open Hazard list | Hazard list is displayed and report action is available. | Yes | Not Run |
| HZ-002 | P0 | Validation | Location is mandatory | Submission is blocked. | Yes | Not Run |
| HZ-003 | P0 | Validation | Sublocation is mandatory | Submission is blocked. | Yes | Not Run |
| HZ-004 | P0 | Validation | Area is mandatory | Submission is blocked. | Yes | Not Run |
| HZ-005 | P2 | Functional | Area Description is optional | Submission can proceed without Area Description. | Yes | Not Run |
| HZ-006 | P0 | Validation | Evidence is mandatory | Submission is blocked. | Yes | Not Run |
| HZ-007 | P0 | Functional | PIC is mandatory and preselected to reporter | PIC defaults to current reporter and can be changed only as permitted. | Yes | Not Run |
| HZ-008 | P0 | Functional | Valid hazard can be submitted | Hazard entry is created and follow-up task is generated. | Yes | Not Run |
| HZ-009 | P0 | Integration | PIC receives follow-up notification | PIC receives notification for follow-up task. | No | Not Run |
| HZ-010 | P1 | Integration | People in area receive hazard notification | People in the area receive hazard notification. | No | Not Run |
| HZ-011 | P1 | Functional | Follow-up task opens for PIC | Task contains required follow-up fields. | Yes | Not Run |
| HZ-012 | P1 | Validation | Resolution Date is mandatory | Submission is blocked. | Yes | Not Run |
| HZ-013 | P1 | Functional | Follow-up evidence can be added | Evidence is accepted and retained. | No | Not Run |
| HZ-014 | P1 | Functional | Co Observer can add multiple fields | Additional Co Observer selectors are added without losing existing selections. | Yes | Not Run |
| HZ-015 | P2 | Boundary | Co Observer selections remain unique if duplicates are disallowed | System prevents duplicates if uniqueness is required by business rules. | No | Not Run |
| HZ-016 | P0 | Functional | Valid follow-up can be submitted | Follow-up is completed and direct supervisor notification is triggered. | Yes | Not Run |
| HZ-017 | P1 | Integration | Direct Supervisor receives completion notification | Direct Supervisor receives notification for the completed follow-up. | No | Not Run |
| HZ-018 | P1 | Resilience | Duplicate hazard is not created on retry | At most one hazard entry is created for one logical submission. | No | Not Run |
| HZ-019 | P1 | Offline | Hazard behavior with no network | User data is retained and sync behavior follows product rules. | No | Not Run |

See `manual-test-cases.xlsx` for the full case details including preconditions and steps.
