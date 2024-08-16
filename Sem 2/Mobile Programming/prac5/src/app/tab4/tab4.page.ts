import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {

  images = [1, 2, 3, 4, 5, 6];

  selectedImage: string = ''; 
  name: string = ''; 
  gender: string = ''; 
  dob: string = ''; 
  submitted: boolean = false;
  constructor() {}

  ngOnInit() {
  }

  selectImage(imageNumber: number) {
    this.selectedImage = `../../assets/${imageNumber}.JPG`;
  }
  submitForm() {
    
    this.submitted = true;
  }

  editForm() {
    
    this.submitted = false;
  }
}
