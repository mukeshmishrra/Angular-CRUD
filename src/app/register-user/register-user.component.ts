import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private user_service:UsersService, private router:Router) { }

  registration_form = this.formBuilder.group({
    name: ['',[Validators.required, Validators.pattern("^[a-zA-Z\s]+$")]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]]
  });

  //creating getter for name field
  get name(){
    return this.registration_form.get("name");
  }

  get email(){
    return this.registration_form.get("email");
  }

  
  get password(){
    return this.registration_form.get("password");
  }
  
  ngOnInit(): void {
  }

  onSubmit(){

    //console.log(this.registration_form.value);
    this.user_service.registerUser(this.registration_form.value).subscribe((result)=>{
      console.log(result);
      //redirect to login page 
      this.router.navigate(['login']);      
    });

  }


}
