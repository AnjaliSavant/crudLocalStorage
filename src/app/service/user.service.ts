import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url="http://localhost:3000/user";
  constructor(private httpclient:HttpClient) { }
  getAlluser(){
    return this.httpclient.get<user[]>("http://localhost:3000/user");
  }

  adduser(data:any){
    return this.httpclient.post<user[]>("http://localhost:3000/user", data)
  }
  deleteuser(id:any){
return this.httpclient.delete(`${this.url}/${id}`);
  }
  deleteAlluser(){
    return this.httpclient.delete(`${this.url}/`)
      }
      getCurrentData(id:any){
        return this.httpclient.get(`${this.url}/${id}`)
      }

  updateData(id: any,data: any){
    return this.httpclient.put(`${this.url}/${id}`, data)
  }
}
