import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  loading = false;
  success = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly angularFirestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$')]]
    });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  // async submitHandler() {
  //   this.loading = true;
  //   const formValue = this.form.value;

  //   try {
  //     await this.angularFirestore.collection('')
  //   } catch (error) {

  //   }
  // }
}
