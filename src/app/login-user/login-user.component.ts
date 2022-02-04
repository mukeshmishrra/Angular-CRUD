import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {


  constructor( private formBuilder:FormBuilder, private userservice: UsersService, private router: Router) { }

    login_Form = this.formBuilder.group(
        {
          username:['',[Validators.required, Validators.email]],
          password:['',Validators.required]
        }
    ); 

          //creating getter for form field
          get username(){
            return this.login_Form.get("username");
          }

          get password(){
            return this.login_Form.get("password");
          }

          error_msg:boolean=false;

    loginSubmission(){
      console.log(this.login_Form.value)
      this.userservice.loginChecker().subscribe((result)=>{
        const user = result.find((check:any)=>{

          return check.email === this.login_Form.value.username && check.password === this.login_Form.value.password ; 
        });
        if(user){
            localStorage.setItem("username",this.login_Form.value.username);
            localStorage.setItem("password",this.login_Form.value.password);
            //redirecting into the user dashboard page
            this.router.navigate(['/user-dashboard']);

            
        }else{
            
          this.error_msg = true;
        }
        
      }, err=>{
        alert('something went wrong!!')
      });
    }


  ngOnInit(): void {
  }

}
