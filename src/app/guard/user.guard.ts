import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('CanActivate called');
    let isLoggedIn = this.authService.isAuthenticated();
    if (isLoggedIn) {
      return true;
    } else {
      //this.router.navigate(['/contact']);
      return false;
    }
  }
}
