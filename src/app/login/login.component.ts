import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'clinic-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  isValid(field: string): boolean {
    return this.loginForm.controls[field].valid && (this.loginForm.controls[field].touched || this.loginForm.controls[field].dirty);
  }

  isInvalid(field: string): boolean {
    return this.loginForm.controls[field].invalid && (this.loginForm.controls[field].touched || this.loginForm.controls[field].dirty);
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(user => console.log(user));
  }

}
