import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: SocialAuthService) { }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])
  })

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      // this.loggedIn = (user != null);
      console.log(user);
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }


  login() {
    console.log(this.loginForm.valid);
    console.log(this.loginForm);
    console.log(this.loginForm.controls.email.touched, this.loginFormControl.email.errors);
    
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  signInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  close() {
    this.onClose.emit(true);
  }

}
