import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AlertComponent } from '../../../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from "../../../../reusableComponents/my-button/my-button.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetAPIComponent implements OnInit {
  userList: any;
  customerList: any;
 alertMsg: string ='';

  // http = inject(HttpClient);

  constructor(private http: HttpClient,) {
    // this.getAllUsers()

  }
  ngOnInit(): void {
    debugger
    this.getAllUsers();

  }

  

  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      debugger
      this.userList = result;

    })
  }

  getAllCustomers() {
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res: any) => {
      console.log(res.data)
      this.customerList = res.data;
    }, error => {
      debugger
    })
  }

  changeMsg(){
    debugger
    this.alertMsg ="Welcome to the GET API page"
  }

}
