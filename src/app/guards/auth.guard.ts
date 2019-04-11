import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

// AuthGuard is used on app routes to control those able to access the path to have to be registered users.
@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router) { }

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            // if not logged in, sent to login page
            if (!localStorage.getItem('id_token')) {
                this.router.navigate(['/login']);
                return observer.next(false);
            } else {
                // if logged in, allows access to protected paths.
                return observer.next(true);
            }
        });
    }
}