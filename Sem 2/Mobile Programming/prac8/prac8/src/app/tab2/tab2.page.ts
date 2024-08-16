import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = [
    { name: 'January', index: 0 },
    { name: 'February', index: 1 },
    { name: 'March', index: 2 },
    { name: 'April', index: 3 },
    { name: 'May', index: 4 },
    { name: 'June', index: 5 },
    { name: 'July', index: 6 },
    { name: 'August', index: 7 },
    { name: 'September', index: 8 },
    { name: 'October', index: 9 },
    { name: 'November', index: 10 },
    { name: 'December', index: 11 }
  ];
  currentYear: number;
  currentMonth: number;
  currentMonthData: any;
  events: any[] = [];
  showEventModal = false;
  event = {
    title: '',
    description: '',
    date: null as Date | null, // Initialize date as Date or null
  };
  todayDate: string;
  maxDate: string;
  selectedDayDate: string;

  constructor(private modalController: ModalController) {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    this.generateMonthData(this.currentYear, this.currentMonth);
    this.todayDate = currentDate.toISOString();
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    this.maxDate = endDate.toISOString();
  }

  generateMonthData(year: number, month: number) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const weeks = this.generateWeeks(startDate, endDate);
    this.currentMonthData = { year: year, month: month, weeks: weeks };
  }

  generateWeeks(startDate: Date, endDate: Date): any[] {
    const weeks = [];
    let currentWeek = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const dayEvents = this.events.filter(
        (event) =>
          event.date && // Check if event.date is not null
          event.date instanceof Date && // Check if event.date is an instance of Date
          this.event.date instanceof Date && // Check if this.event.date is an instance of Date
          event.date.getFullYear() === currentDate.getFullYear() &&
          event.date.getMonth() === currentDate.getMonth() &&
          event.date.getDate() === currentDate.getDate()
      );
      currentWeek.push({ day: currentDate.getDate(), events: dayEvents });
      currentDate.setDate(currentDate.getDate() + 1);
      if (currentDate.getDay() === 0 || currentDate > endDate) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    return weeks;
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateMonthData(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateMonthData(this.currentYear, this.currentMonth);
  }

  changeMonth() {
    this.generateMonthData(this.currentYear, this.currentMonth);
  }

  previousYear() {
    this.currentYear--;
    this.generateMonthData(this.currentYear, this.currentMonth);
  }

  nextYear() {
    this.currentYear++;
    this.generateMonthData(this.currentYear, this.currentMonth);
  }

  selectDay(day: any) {
    this.selectedDayDate = new Date(this.currentYear, this.currentMonth, day.day).toISOString();
    this.openEventModal(day.events);
  }

  async openEventModal(events: any[] = []) {
    this.showEventModal = true;
    if (events.length > 0) {
      // Edit existing event
      this.event = { ...events[0] };
    } else {
      // Add new event
      this.event = {
        title: '',
        description: '',
        date: null, // Initialize date as null
      };
    }
  }

  saveEvent() {
    if (!this.event.title.trim()) {
      return;
    }
    const existingIndex = this.events.findIndex(
      (e) => e.date && e.date instanceof Date && this.event.date instanceof Date &&
        e.date.getFullYear() === this.event.date?.getFullYear() &&
        e.date.getMonth() === this.event.date?.getMonth() &&
        e.date.getDate() === this.event.date?.getDate()
    );
    if (existingIndex !== -1) {
      // Update existing event
      this.events[existingIndex] = { ...this.event };
    } else {
      // Add new event
      this.events.push({ ...this.event });
    }
    this.generateMonthData(this.currentYear, this.currentMonth);
    this.closeEventModal();
  }

  closeEventModal() {
    this.showEventModal = false;
  }
}
