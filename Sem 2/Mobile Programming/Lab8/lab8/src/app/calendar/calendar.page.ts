import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, addDays } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      start: startOfDay(new Date()),
      end: addDays(new Date(), 1),
    },
    {
      title: 'Event 2',
      start: addDays(new Date(), 2),
      end: addDays(new Date(), 3),
    },
  ];

  constructor() {}

  dayClicked({ date }: { date: Date }): void {
    console.log('Day clicked', date);
  }

  eventClicked(event: CalendarEvent): void {
    console.log('Event clicked', event);
  }
}
