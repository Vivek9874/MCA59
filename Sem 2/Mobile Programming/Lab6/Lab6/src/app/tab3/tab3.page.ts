
import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA,Inject, NgModule} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormService } from '../form.service';
import { CommonModule } from '@angular/common';

import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonList, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule],
  providers: [
    FileOpener, 
    Platform, 
    InAppBrowser 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Tab3Page implements OnInit {
  name: string = '';
  email: string = '';
  contact: string = '';
  rollNo: string = '';
  hscCollege: string = '';
  hscYear: string = '';
  hscTotal: number | null = null;
  hscOutof: number | null = null;
  hscPercentage: string = '';

  sscCollege: string = '';
  sscYear: string = '';
  sscTotal: number | null = null;
  sscOutof: number | null = null;
  sscPercentage:string='';

  semesterCGPA: number | null = null;
  
  additionalCourses: string = '';
  resume: File | null = null;
  dataAvailable: boolean = false;

  constructor(private formService: FormService,
    @Inject(FileOpener) private fileOpener: FileOpener,
    @Inject(Platform) private platform: Platform,private inAppBrowser: InAppBrowser) {}

  ngOnInit() {
    this.formService.name$.subscribe((name) => {
      this.name = name;
      this.checkDataAvailability();
    });

    this.formService.email$.subscribe((email) => {
      this.email = email;
      this.checkDataAvailability();
    });

    this.formService.contact$.subscribe((contact) => {
      this.contact = contact;
      this.checkDataAvailability();
    });

    this.formService.rollNo$.subscribe((rollNo) => {
      this.rollNo = rollNo;
      this.checkDataAvailability();
    });

    this.formService.hscCollege$.subscribe((hscCollege) => {
      this.hscCollege = hscCollege;
      this.checkDataAvailability();
    });

    this.formService.hscYear$.subscribe((hscYear) => {
      this.hscYear = hscYear;
      this.checkDataAvailability();
    });

    this.formService.hscTotal$.subscribe((hscTotal) => {
      this.hscTotal = hscTotal;
      this.calculateHscPercentage(); 
      this.checkDataAvailability();
    });
  
    this.formService.hscOutof$.subscribe((hscOutof) => {
      this.hscOutof = hscOutof;
      this.calculateHscPercentage(); 
      this.checkDataAvailability();
    });
    

    this.formService.sscCollege$.subscribe((sscCollege) => {
      this.sscCollege = sscCollege;
      this.checkDataAvailability();
    });

    this.formService.sscYear$.subscribe((sscYear) => {
      this.sscYear = sscYear;
      this.checkDataAvailability();
    });

    this.formService.sscTotal$.subscribe((sscTotal) => {
      this.sscTotal = sscTotal;
      this.calculateSscPercentage();
      this.checkDataAvailability();
    });

    this.formService.sscOutof$.subscribe((sscOutof) => {
      this.sscOutof = sscOutof;
      this.calculateSscPercentage();
      this.checkDataAvailability();
    });

   

    this.formService.semesterCGPA$.subscribe((semesterCGPA) => {
      this.semesterCGPA = semesterCGPA;
      this.checkDataAvailability();
    });

   
    this.formService.additionalCourses$.subscribe((additionalCourses) => {
      this.additionalCourses = additionalCourses;
      this.checkDataAvailability();
    });
    this.formService.resume$.subscribe((resume) => {
      this.resume = resume;
      this.checkDataAvailability();
    });
  }

  calculateHscPercentage() {
    if (this.hscTotal !== null && this.hscOutof !== null && this.hscOutof !== 0) {
      this.hscPercentage = ((this.hscTotal / this.hscOutof) * 100).toFixed(2) + '%';
    } else {
      this.hscPercentage = '';
    }
  }
  calculateSscPercentage() {
    if (this.sscTotal !== null && this.sscOutof !== null && this.sscOutof !== 0) {
      this.sscPercentage = ((this.sscTotal / this.sscOutof) * 100).toFixed(2) + '%';
    } else {
      this.sscPercentage = '';
    }
  }
  

  checkDataAvailability() {
    this.dataAvailable =
      this.name !== '' ||
      this.email !== '' ||
      this.contact !== '' ||
      this.rollNo !== '' ||
      this.hscCollege !== '' ||
      this.hscYear !== '' ||
      this.hscTotal !== null ||
      this.hscOutof !== null ||
      this.hscPercentage !== '' ||
      this.sscCollege !== '' ||
      this.sscYear !== '' ||
      this.sscTotal !== null ||
      this.sscOutof !== null ||
      this.sscPercentage!==''||
      this.semesterCGPA !== null ||
      
      this.additionalCourses !== '';
      this.resume !== null;
  }
 
  openResume() {
    if (this.resume) {
      const fileUrl = URL.createObjectURL(this.resume);
  
      const options: InAppBrowserOptions = {
        location: 'yes',
        hidden: 'no',
        zoom: 'yes',
      };
  
      const browser = this.inAppBrowser.create(fileUrl, '_system', options);
    }
  }
}
