import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formbuilder : FormBuilder, private user : UsersService, private _route:Router) { }

  form = this.formbuilder.group({  
    firstname: ['',[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]],
    lastname: ['',[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]],
    mobile: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
    email: ['',[Validators.required,Validators.email]],
    password: [''] 
  });

  success_message : boolean = false;
  saveData(){
    //console.log(this.form.value);
    this.user.saveUserData(this.form.value).subscribe((val)=>{
      //console.log(val)


      this.success_message=true;
      setTimeout(() => {
        this.success_message = false;
        this._route.navigate(['/user-dashboard']);
       }, 3000)


      //this.form.reset({ });
    });
  }

  // creating getter for validation
  get firstname(){
    return this.form.get('firstname');
  }
  get lastname(){
    return this.form.get('lastname');
  }
  get mobile(){
    return this.form.get('mobile');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  ngOnInit(): void { 

  }

}
