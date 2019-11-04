import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {


  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  isAuth = false;

  authSubscription: Subscription;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange$.subscribe(status => {
      this.isAuth = status;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onToggleSidenav() {
    this.toggle.emit();
  }

}
