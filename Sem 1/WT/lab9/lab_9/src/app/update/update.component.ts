// import { Component, OnInit } from '@angular/core';
// import axios from 'axios';

// @Component({
//   selector: 'app-update',
//   templateUrl: './update.component.html',
//   styleUrls: ['./update.component.css']
// })
// export class UpdateComponent implements OnInit {
//   student:any[] = []
//   ngOnInit(): void {
//     this.getData();
//   }

//   getData(): void {
//     axios
//       .get<any[]>('http://localhost:3000/update/:id')
//       .then((response) => {
//         console.log(response.data);
//         this.student = response.data;
//       })
//       .catch((error) => {
//         console.error('Error fetching students:', error);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  student: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.getData(studentId);
  }

  getData(studentId: string | null): void {
    if (studentId) {
      axios
        .get<any>(`http://localhost:3000/update/${studentId}`)
        .then((response) => {
          this.student = response.data;
        })
        .catch((error) => {
          console.error('Error fetching student:', error);
        });
    }
  }
}
