import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title = 'Calculator';
  public n1: any;
  public n2: any;
  public answer: any;
  public operator: any;
  public showError: boolean = false;

  add() {
    if (this.validateInput()) {
      this.answer = this.n1 + this.n2;
      this.operator = "addition";
    }
  }

  sub() {
    if (this.validateInput()) {
      this.answer = this.n1 - this.n2;
      this.operator = "subtraction";
    }
  }

  mul() {
    if (this.validateInput()) {
      this.answer = this.n1 * this.n2;
      this.operator = "multiplication";
    }
  }

  div() {
    if (this.validateInput()) {
      if (this.n2 !== 0) {
        this.answer = this.n1 / this.n2;
        this.operator = "division";
      } else {
        alert("Division by zero is not allowed.");
      }
    }
  }

  clear() {
    this.n1 = "";
    this.n2 = "";
    this.answer = "";
    this.operator = "";
    this.showError = false; 
  }

   validateInput(): boolean {
    if (this.n1 === null || this.n2 === null || this.n1 === "" || this.n2 === "") {
      this.showError = true; 
      return false;
    }
    this.showError = false; 
    return true;
  }
}
