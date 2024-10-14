import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.scss'
})
export class LifecycleEventComponent implements OnInit , OnChanges, DoCheck , AfterContentChecked , AfterContentInit , AfterViewInit , AfterViewChecked , OnDestroy{
  
  fName: string;

  constructor() {
    console.log("constructor")   // when page loads or instantiate the component 
    this.fName = '' ; //and normally the constructor we use for initialisation and we can't call API call in it
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng On changes")   // when we use any resusable component - means if we use input and output directives 
  }
  
  ngOnInit(){
    console.log("ngOinit")   // when Api call here

  }

  ngDoCheck(): void {
    console.log("ngDocheck")   // when any change detect in the the angular app
  }

  ngAfterContentInit(): void {
    console.log("aftercontentInit")   //called when we integrate external content or video in the component then this will initialise and then checked 
  }

  ngAfterContentChecked(): void {
    console.log("after content checked")
  }

  ngAfterViewInit(): void {
    console.log("afterViewinit")   // when we use any reusable component then after that component's view initialise , it will be called
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }  

  ngOnDestroy(): void {
    console.log("ng On destroy") // before any component destroy like when we go to others component and usually used when unsubscribe the API calls
  }

}
