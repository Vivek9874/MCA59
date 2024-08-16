import { Component,OnInit,CUSTOM_ELEMENTS_SCHEMA,ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner, IonImg, IonButton, IonRadio, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz.service';
import { NgForm ,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonLabel, IonRadio, IonButton, IonImg, IonSpinner,FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page implements OnInit {
  @ViewChild('quizForm') quizForm!: NgForm;
  questions = [
    { 
      question: 'Identify the fruit?', 
      imageUrl: '../../assets/apple.jpg',
      options: ['Apple' ,'Mango','Orange','Banana'  ], 
      correctAnswer: 'Apple' 
    },
    { 
      question: 'Identify the animal in this image?', 
      imageUrl: 'https://img.freepik.com/free-vector/cute-elephant-cartoon-character_1308-140184.jpg',
      options: ['Lion' ,'Tiger','Elephant','Zebra' ], 
      correctAnswer: 'Elephant' 
    },
    { 
      question: 'Count the number of fingers', 
      imageUrl: '../../assets/count.JPG',
      options: ['3' ,'4','5','6'], 
      correctAnswer: '5' 
    },
    { 
      question: 'Identify Horse from the following', 
      imageUrl: '../../assets/animals.JPG',
      options: ['1' ,'2', '3','4' ], 
      correctAnswer: '3' 
    }
  ];
  currentQuestionIndex = 0;
  
  score = 0;
  
  showSplashScreen = true;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSplashScreen = false;
    }, 3000);
  }

  checkAnswer(selectedOption: string) {
    const correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.questions.length) {
      this.quizService.addScore(this.score);
    }
  }
  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.quizService.addScore(this.score);
  }
  
}

