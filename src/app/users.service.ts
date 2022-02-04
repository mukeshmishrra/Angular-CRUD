import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  url ="http://localhost:3000/users";

  getAllUser(){
    return this.http.get(this.url);
  }

//post 
  saveUserData(data:any){
    //console.log(data)
    return this.http.post(this.url,data)
  }

//delete request
  deleteUser(id : any){
    return this.http.delete(`${this.url}/${id}`);
  }

  //getting user data by id 
  getUserById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

//updating the form data of a perticular selected by id
  updateUserData(id:number, data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }

  //Registration of new user

  authUrl = "http://localhost:3000/userauth"; 
  registerUser(data:any){
    return this.http.post(this.authUrl,data);
  }


  //login
  loginChecker(){
    return this.http.get<any>(this.authUrl);
  }
  
  
}
