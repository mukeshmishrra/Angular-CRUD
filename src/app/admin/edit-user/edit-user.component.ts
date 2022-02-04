import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private user:UsersService, private router:ActivatedRoute, private redirect:Router) { }

  editform = this.formBuilder.group({
   
    firstname: ['',[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]],
    lastname: ['',[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]],
    mobile: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]]  
  });


  // creating getter for validation
  get firstname(){
    return this.editform.get('firstname');
  }
  get lastname(){
    return this.editform.get('lastname');
  }
  get mobile(){
    return this.editform.get('mobile');
  }
  get email(){
    return this.editform.get('email');
  }
  get password(){
    return this.editform.get('password');
  }

  success_message : boolean = false;

  updateData(){
  this.user.updateUserData(this.router.snapshot.params['id'], this.editform.value).subscribe((result)=>{
      console.log(result);
      if(result){
        this.success_message=true;
        setTimeout(()=>{
          this.success_message=false;
          this.redirect.navigate(['/user-dashboard']);
        },3000);
        
      }  
  });    
  }

  ngOnInit(): void {
    //getting id from url
    console.log(this.router.snapshot.params['id']);
    this.user.getUserById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);

      this.editform = this.formBuilder.group({
    
        firstname: [result['firstname'],[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]],
        lastname: [result['lastname'],[Validators.required,Validators.pattern("^[a-zA-Z\s]+$")]],
        mobile: [result['mobile'],[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        email: [result['email'],[Validators.required,Validators.email]],
        password: [result['password'],[Validators.required]]
      });
    });
  }
}
