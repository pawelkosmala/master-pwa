import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  loading = false;
  success = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {

    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.authService.login(this.form.getRawValue());
  }
}
