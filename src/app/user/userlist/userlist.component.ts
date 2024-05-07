import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  id:number=0;
  result: user[]=[];
  constructor(private userService:UserService){}
  ngOnInit(): void{
    this.getUsers();
  }
 getUsers(){
     this.userService.getAlluser().subscribe((response: user[])=>{
     console.log(response);
     this.result=response;
     console.log(this.result)
     })
   }
   delete(id:any){
    this.userService.deleteuser(id)
      .subscribe(()=>{
      //  console.log(response);
        this.getUsers();
      })
    }
    deleteAll(){
      this.userService.deleteAlluser().subscribe(()=>{
        console.log();
      })
    }
}
