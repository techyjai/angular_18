import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {

  @Input() btnText:String ='';
  @Input() btnClass:String ='';

  @Output()  onBtnClick = new EventEmitter<any>();
  
  onClick(){
    debugger
    this.onBtnClick.emit("Hi From Child");
  }
}
