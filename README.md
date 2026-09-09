# Automation Layer

This folder contains the portfolio automation layer for the Executive Global Business Travel project.

## Files

- `calendar-automation.gs` — creates/updates Calendar events from structured travel data.
- `email-notifications.gs` — sends reminder emails for upcoming Calendar events.
- `README.md` — setup notes.

## Setup

1. Open Google Apps Script.
2. Create a new project.
3. Copy the `.gs` files into the project.
4. Replace the configuration values with your own Calendar ID and executive email.
5. Run the setup function once and authorize the requested Google permissions.
6. Create time-driven triggers for the reminder function.

### Security

Do **not** hard-code passwords, API keys, OAuth secrets, or private credentials in this repository.

The scripts are starter portfolio implementations. They should be tested against a copy of your Calendar/Sheet before being used operationally.
