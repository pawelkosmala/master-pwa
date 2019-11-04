import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeSidenav: EventEmitter<void> = new EventEmitter<void>();

  isAuth = false;

  authSubscription: Subscription;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.getAuth();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  getAuth() {
    this.authSubscription = this.authService.authChange$.subscribe(status => {
      this.isAuth = status;
    });
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }

  onClose() {
    this.closeSidenav.emit();
  }
}
