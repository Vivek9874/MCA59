import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  students: any[] = [];
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(): void {
    axios
      .get<any[]>('http://localhost:3000/view')
      .then((response) => {
        this.students = response.data;
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }

  handleDelete(studentID: any): void {
    const confirmation = confirm(
      'Are you sure you want to delete this student?'
    );
    if (confirmation) {
      axios
        .delete(`http://localhost:3000/delete/${studentID}`)
        .then((response) => {
          alert(response.data);
          window.location.reload();
        })
        .catch((error) => {
          alert(`Failed to delete student. Error: ${error}`);
        });
    } else {
      alert('Deletion cancelled.');
    }
  }
}
