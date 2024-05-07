import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  userForm:FormGroup;
  userResponse:any;
  res: any;
  
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute){
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
  ngOnInit(){
    this.userService.getCurrentData(this.activatedRoute.snapshot.params['id']).subscribe((response)=>{
      this.res=response;
      console.log(response);
      console.log(this.res);
      this.userForm = new FormGroup({
        id:new FormControl(this.res.id),
        name:new FormControl(this.res.name),
        mobileNo: new FormControl(this.res.mobileNo),
        email: new FormControl(this.res.email),
        age: new FormControl(this.res.age),
        gender: new FormControl(this.res.gender),
        address: new FormControl(this.res.address),
        companyname: new FormControl(this.res.companyname),
      });
    })
  }
}
