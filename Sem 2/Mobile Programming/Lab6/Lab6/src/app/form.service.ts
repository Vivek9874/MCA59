
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private nameSubject = new BehaviorSubject<string>('');
  private emailSubject = new BehaviorSubject<string>('');
  private contactSubject = new BehaviorSubject<string>('');
  private rollNoSubject = new BehaviorSubject<string>('');
  private hscCollegeSubject = new BehaviorSubject<string>('');
  private hscYearSubject = new BehaviorSubject<string>('');
  private hscTotalSubject = new BehaviorSubject<number | null>(null);
  private hscOutofSubject = new BehaviorSubject<number | null>(null);
  private hscPercentageSubject = new BehaviorSubject<string>('');
  private sscCollegeSubject = new BehaviorSubject<string>('');
  private sscYearSubject = new BehaviorSubject<string>('');
  private sscTotalSubject = new BehaviorSubject<number | null>(null);
  private sscOutofSubject = new BehaviorSubject<number | null>(null);
  private sscPercentageSubject = new BehaviorSubject<string>('');
  private semesterCGPASubject = new BehaviorSubject<number | null>(null);
  private semesterPercentageSubject = new BehaviorSubject<string>('');
  private additionalCoursesSubject = new BehaviorSubject<string>('');

  private resumeSubject = new BehaviorSubject<File | null>(null);

  get name$() {
    return this.nameSubject.asObservable();
  }

  get email$() {
    return this.emailSubject.asObservable();
  }

  get contact$() {
    return this.contactSubject.asObservable();
  }

  get rollNo$() {
    return this.rollNoSubject.asObservable();
  }

  get hscCollege$() {
    return this.hscCollegeSubject.asObservable();
  }

  get hscYear$() {
    return this.hscYearSubject.asObservable();
  }

  get hscTotal$() {
    return this.hscTotalSubject.asObservable();
  }

  get hscOutof$() {
    return this.hscOutofSubject.asObservable();
  }

  get hscPercentage$() {
    return this.hscPercentageSubject.asObservable();
  }

  get sscCollege$() {
    return this.sscCollegeSubject.asObservable();
  }

  get sscYear$() {
    return this.sscYearSubject.asObservable();
  }

  get sscTotal$() {
    return this.sscTotalSubject.asObservable();
  }

  get sscOutof$() {
    return this.sscOutofSubject.asObservable();
  }

  get sscPercentage$() {
    return this.sscPercentageSubject.asObservable();
  }

  get semesterCGPA$() {
    return this.semesterCGPASubject.asObservable();
  }

  get semesterPercentage$() {
    return this.semesterPercentageSubject.asObservable();
  }

  get additionalCourses$() {
    return this.additionalCoursesSubject.asObservable();
  }

  setName(name: string) {
    this.nameSubject.next(name);
  }

  setEmail(email: string) {
    this.emailSubject.next(email);
  }

  setContact(contact: string) {
    this.contactSubject.next(contact);
  }

  setRollNo(rollNo: string) {
    this.rollNoSubject.next(rollNo);
  }

  setHscCollege(hscCollege: string) {
    this.hscCollegeSubject.next(hscCollege);
  }

  setHscYear(hscYear: string) {
    this.hscYearSubject.next(hscYear);
  }

  setHscTotal(hscTotal: number | null) {
    this.hscTotalSubject.next(hscTotal);
  }

  setHscOutof(hscOutof: number | null) {
    this.hscOutofSubject.next(hscOutof);
  }

  setHscPercentage(hscPercentage: string) {
    this.hscPercentageSubject.next(hscPercentage);
  }

  setSscCollege(sscCollege: string) {
    this.sscCollegeSubject.next(sscCollege);
  }

  setSscYear(sscYear: string) {
    this.sscYearSubject.next(sscYear);
  }

  setSscTotal(sscTotal: number | null) {
    this.sscTotalSubject.next(sscTotal);
  }

  setSscOutof(sscOutof: number | null) {
    this.sscOutofSubject.next(sscOutof);
  }

  setSscPercentage(sscPercentage: string) {
    this.sscPercentageSubject.next(sscPercentage);
  }

  setSemesterCGPA(semesterCGPA: number | null) {
    this.semesterCGPASubject.next(semesterCGPA);
  }

  setSemesterPercentage(semesterPercentage: string) {
    this.semesterPercentageSubject.next(semesterPercentage);
  }

  setAdditionalCourses(additionalCourses: string) {
    this.additionalCoursesSubject.next(additionalCourses);
  }

  resetData() {
    this.nameSubject.next('');
    this.emailSubject.next('');
    this.contactSubject.next('');
    this.rollNoSubject.next('');
    this.hscCollegeSubject.next('');
    this.hscYearSubject.next('');
    this.hscTotalSubject.next(null);
    this.hscOutofSubject.next(null);
    
    this.sscCollegeSubject.next('');
    this.sscYearSubject.next('');
    this.sscTotalSubject.next(null);
    this.sscOutofSubject.next(null);
  
    this.semesterCGPASubject.next(null);
   
    this.additionalCoursesSubject.next('');
   
  }

  get resume$() {
    return this.resumeSubject.asObservable();
  }
  setResume(resume: File | null) {
    this.resumeSubject.next(resume);
  }

}
