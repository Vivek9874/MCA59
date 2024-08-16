import { Component,CUSTOM_ELEMENTS_SCHEMA, ViewChild,AfterViewInit } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
 
  imports: [IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonMenu,IonMenuButton,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page implements AfterViewInit {

  @ViewChild(IonMenu) menu!: IonMenu;


  constructor() {}



  selectedContent: string = 'HOME'; 

 

  showContent(content: string): void {
    this.selectedContent = content;
    this.menu.close();
  }
  
  ngAfterViewInit() {
    this.menu.contentId = 'main-content';    
  }

 
  
    
  
     

  
}
