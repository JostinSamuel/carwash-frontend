import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  
  constructor(private route: Router) {

  }
  
  login(){
    
    
  }

  registerPage(){
    this.route.navigate(['/register'])
  }
  
  recoverPass(){
    this.route.navigate(['/recover'])

  }
}
