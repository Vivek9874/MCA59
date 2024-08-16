import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { QuizService } from '../quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab3Page implements OnInit{
  myScore!: number;
  selectedImage: string = '';
  
  players = [
    { name: 'Alice', score: 4 },
    { name: 'Bob', score: 3 },
    { name: 'Charlie', score: 2 },
    { name: 'David', score: 1 },
    { name: 'Eve', score: 0 },
  ];
  constructor(private quizService: QuizService) {}

 
  ngOnInit() {
    
    this.quizService.quizScore$.subscribe(score => {
      this.myScore = score;
    });
  }


  get myRank() {
    const sortedPlayers = [...this.players, { name: 'You', score: this.myScore }]
      .sort((a, b) => b.score - a.score);
    return sortedPlayers.findIndex(p => p.score === this.myScore) + 1;
  }
}
