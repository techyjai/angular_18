import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule , AlertComponent , MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostAPIComponent implements OnInit {

  departmentList: any;

  http = inject(HttpClient)

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  ngOnInit() {
    this.getDepartmentList();
  }

  getData(data:any){
    debugger
    console.log(data)

  }

  onSave() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
      console.log(res);
      console.log(res.data);
      if (res.result) {
        alert("Department created success")
        this.getDepartmentList();
      } else {
        alert(res.message)
      }
    })
  }

  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Department Updated Success");
         this.getDepartmentList();
      } else {
        alert(res.message)
      }
    })
  }

  getDepartmentList() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
      this.departmentList = res.data;
    })
  }

  onEdit(data: any) {
    this.deptObj = data;

  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want ot delete");
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
        if (res.result) {
          alert(res.message)
          this.getDepartmentList();
        } else {
          alert(res.message)
        }
      })
    }
  }
}
