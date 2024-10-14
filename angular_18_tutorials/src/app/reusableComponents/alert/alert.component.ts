import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent  implements OnChanges{
  
  @Input() message : string ="";
  @Input() alertType : string ="";

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log("ng On changes ")
  }

}
