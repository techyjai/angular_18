import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../../pipe/na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe , TitleCasePipe , LowerCasePipe , AsyncPipe , NaPipe , JsonPipe , DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

  firstName: string = "this is a demo session";

  currentDate: Date = new Date();

  currentRole : string = '' ;

  currentTime : Observable<Date> = new Observable<Date> ;

  student : any = {
    name : "Jaideep",
    city : "BSR",
    empId : 323,
    state : ""
  }

  constructor (){
    this.currentTime = interval(1000).pipe(map(()=> new Date()));
  }

}
