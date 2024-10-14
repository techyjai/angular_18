import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {


  div1BgColor: string = "bg-primary";
  div2BgColor: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  customStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius' : '50%'

  }
  studentList: any[] = [
    { studentId: 12, name: "Jaideep", city: "Bulandshahr", isActive: true, gender: "male", totalMarks: 48 },
    { studentId: 13, name: "Rahul", city: "Agota", isActive: false, gender: "male", totalMarks: 95 },
    { studentId: 14, name: "Pooja", city: "Noida", isActive: true, gender: "female", totalMarks: 75 }
  ]

  addRed() {
    this.div1BgColor = "bg-danger";
  }
  addBlue() {
    this.div1BgColor = "bg-primary"
  }

  toggleColor() {
    this.div2BgColor = !this.div2BgColor;
  }


}
