import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizScoreSource = new BehaviorSubject<number>(0);
  quizScore$ = this.quizScoreSource.asObservable();

  addScore(score: number) {
    this.quizScoreSource.next(score);
  }
}