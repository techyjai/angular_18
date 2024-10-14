import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";
  stateName: string = "Uttar Pradesh"
  inputType = "checkbox";
  myClassName = "bg-primary";
  rollNo: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Jaideep Singh")

  constructor() {

  }

  showAlert(message: string) {
    alert(message);

  }

  changeCourseName() {
    this.courseName = "React JS"
    this.firstName.set("Bill Gates");
  }
}
