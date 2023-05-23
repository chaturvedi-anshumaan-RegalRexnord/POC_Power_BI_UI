import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import dataFromJson from '../../assets/userdata.json';
import { UserDetailsModel } from '../model/userDetailsModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router){
    
  }
  data: UserDetailsModel[]=dataFromJson; 
  error: string='';
  loginForm: FormGroup = new FormGroup({
    username:  new FormControl('', [Validators.required]),
    password:  new FormControl('', [Validators.required])
  });
  
 
  submit(){
    if (this.loginForm.invalid) {
        return;
    }else{
     if(this.data.some(element=>
       {
        if(element.username===this.loginForm.value.username && element.password===this.loginForm.value.password){
          localStorage.setItem('loginRole', element.role );
          return true
        }else return false
       }
       )
       
       ){
      this.error=''
      this.router.navigate(['/dashboard']);
      localStorage.setItem('loginSucess','sucess' );
    }else this.error="invalid credentials"
  
    }

  }
  resetvalidation(){
    this.error=''
  }

}
