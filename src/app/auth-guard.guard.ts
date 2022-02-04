import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

    constructor(public router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(localStorage.getItem('username')==null && localStorage.getItem('password')==null)
       {
        //redirect to login page
        this.router.navigate(['login']);  
        return false;
          
       }
       else{
         return true;
         //redirect to dashboard page 
         this.router.navigate(['user-dashboard']);
       }
    }
  
}
