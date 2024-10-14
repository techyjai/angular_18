import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule , JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {

  studentForm : FormGroup = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    city : new FormControl(),
    state : new FormControl(),
    zipcode : new FormControl(),
    isAcceptTerms : new FormControl(),
  })

  formValue : any;

  onSave(){
    this.formValue = this.studentForm.value;
  }



}
