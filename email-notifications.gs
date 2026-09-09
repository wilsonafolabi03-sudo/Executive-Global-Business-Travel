/**
 * Executive Global Business Travel
 * Gmail reminder starter
 *
 * Sends a reminder for upcoming Calendar events.
 * Configure your own email address before use.
 */

const EMAIL_CONFIG = {
  recipient: 'YOUR_EMAIL@example.com',
  hoursAhead: 24
};

function sendUpcomingEventReminder() {
  const calendar = CalendarApp.getDefaultCalendar();
  const now = new Date();
  const future = new Date(now.getTime() + EMAIL_CONFIG.hoursAhead * 60 * 60 * 1000);

  const events = calendar.getEvents(now, future);

  events.forEach(event => {
    const subject = `Travel Assistant Reminder: ${event.getTitle()}`;
    const body =
      `Upcoming event:\n\n` +
      `${event.getTitle()}\n` +
      `Starts: ${event.getStartTime()}\n` +
      `Ends: ${event.getEndTime()}\n\n` +
      `This is an automated executive travel reminder.`;

    MailApp.sendEmail(EMAIL_CONFIG.recipient, subject, body);
  });
}
