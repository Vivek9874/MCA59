import { Component, OnInit, ViewChild,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToast, ToastController } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormService } from '../form.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, FormsModule, IonToast],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page implements OnInit {
  formData: any = {
    name: '',
    email: '',
    contact: '',
    rollNo: '',
    hscCollege: '',
    hscYear: '',
    hscTotal: null,
    hscOutof: null,
   
    sscCollege: '',
    sscYear: '',
    sscTotal: null,
    sscOutof: null,
    
    semesterCGPA: null,
    
    additionalCourses: '',
    resume: null,
  };

  @ViewChild(IonToast) toast!: IonToast;

  constructor(private formService: FormService, private toastController: ToastController) {}

  ngOnInit() {}

  async submitForm(form: NgForm) {
    if (form.valid) {
      this.formService.setName(this.formData.name);
      this.formService.setEmail(this.formData.email);
      this.formService.setContact(this.formData.contact);
      this.formService.setRollNo(this.formData.rollNo);
      this.formService.setHscCollege(this.formData.hscCollege);
      this.formService.setHscYear(this.formData.hscYear);
      this.formService.setHscTotal(this.formData.hscTotal);
      this.formService.setHscOutof(this.formData.hscOutof);
      
      this.formService.setSscCollege(this.formData.sscCollege);
      this.formService.setSscYear(this.formData.sscYear);
      this.formService.setSscTotal(this.formData.sscTotal);
      this.formService.setSscOutof(this.formData.sscOutof);
      
      this.formService.setSemesterCGPA(this.formData.semesterCGPA);
      
      this.formService.setAdditionalCourses(this.formData.additionalCourses);

      this.formService.setResume(this.formData.resume);

      const toast = await this.toastController.create({
        message: 'Form submitted successfully!',
        duration: 2000,
        color: 'success',
        position: 'bottom',
      });

      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Please fill in all required fields.',
        duration: 2000,
        color: 'danger',
        position: 'bottom',
      });

      toast.present();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      contact: '',
      rollNo: '',
      hscCollege: '',
      hscYear: '',
      hscTotal: null,
      hscOutof: null,
      
      sscCollege: '',
      sscYear: '',
      sscTotal: null,
      sscOutof: null,
      
      semesterCGPA: null,
      
      additionalCourses: '',
      resume: null,
    };

    this.formService.resetData();
  }
  handleFileUpload(event: any) {
    const file = event.target.files[0];
    this.formData.resume = file;
  
  }

}


