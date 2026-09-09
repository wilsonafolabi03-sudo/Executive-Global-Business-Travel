/**
 * Executive Global Business Travel
 * Calendar automation starter
 *
 * This script demonstrates how structured itinerary data can
 * be converted into Google Calendar events.
 */

const CONFIG = {
  calendarId: 'YOUR_CALENDAR_ID'
};

const ITINERARY = [
  {
    title: 'Flight: Lagos → London',
    start: '2026-05-10T22:50:00',
    end: '2026-05-11T05:25:00',
    description: 'British Airways | Executive travel leg'
  },
  {
    title: 'Flight: London → Dubai',
    start: '2026-05-13T10:00:00',
    end: '2026-05-13T20:00:00',
    description: 'Emirates | Executive travel leg'
  },
  {
    title: 'Flight: Dubai → New York',
    start: '2026-05-20T09:00:00',
    end: '2026-05-20T15:00:00',
    description: 'Emirates | Executive travel leg'
  },
  {
    title: 'Flight: New York → Lagos',
    start: '2026-05-31T20:00:00',
    end: '2026-06-01T12:00:00',
    description: 'Delta Airlines | Return travel leg'
  }
];

function createTravelCalendarEvents() {
  const calendar = CalendarApp.getCalendarById(CONFIG.calendarId);

  if (!calendar) {
    throw new Error('Calendar not found. Check CONFIG.calendarId.');
  }

  ITINERARY.forEach(item => {
    const start = new Date(item.start);
    const end = new Date(item.end);

    calendar.createEvent(item.title, start, end, {
      description: item.description
    });
  });

  Logger.log('Travel calendar events created.');
}
