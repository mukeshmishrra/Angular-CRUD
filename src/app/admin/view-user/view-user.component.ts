import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { FilterPipe } from 'src/app/filter.pipe';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private user : UsersService) { }

  userData:any = [];

  nameSearch:string ='';

  p: number = 1;

  delete_success:boolean=false;
  
  ngOnInit(): void {
    console.log("testin data"+this.nameSearch);
    
    //calling service class and getting api
    this.user.getAllUser().subscribe((allData)=>{
      console.log(allData);
      this.userData =allData;
    });

  }

  deleteUser(userid:any){
    console.log(userid);
     this.user.deleteUser(userid).subscribe((result)=>{
      console.log(result);
      //after delete a user it will refresh the page automatically
       //refreshing the page
       this.ngOnInit();

       //display error msg
       this.delete_success=true;
       setTimeout(() => {
         this.delete_success = false;
         
        }, 3000)
     // 
     });
  }

}
