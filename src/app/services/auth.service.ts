import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange$ = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private readonly router: Router,
    private readonly angularFireAuth: AngularFireAuth
  ) { }

  register(user: User) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(result => {
      this.authChange$.next(true);
      this.isAuthenticated = true;
      this.router.navigate(['/']);
    }).catch(error => {
      console.log(error);
    });
  }

  login(user: User) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(result => {
      this.authChange$.next(true);
      this.isAuthenticated = true;
      this.router.navigate(['/']);
    }).catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.authChange$.next(false);
    this.router.navigate(['/']);
  }


  isAuth() {
    return this.isAuthenticated;
  }
}
