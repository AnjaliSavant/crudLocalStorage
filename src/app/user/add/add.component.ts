import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  userForm: FormGroup;
  constructor(private userService: UserService, public formBuilder:FormBuilder){
   this.userForm = new FormGroup({
      id:new FormControl(),
      name:new FormControl(''),
      mobileNo: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      companyname: new FormControl(''),
    }); 
  }
  SubmitForm(){
    this.userService.adduser(this.userForm.value)
      .subscribe((response)=>{
      })
  }
}
