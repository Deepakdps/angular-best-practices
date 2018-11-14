import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'app/core/user-repository.service';

@Component({
  styleUrls: ['sign-in.component.css'],
  templateUrl: 'sign-in.component.html'
})
export class SignInComponent {
  credentials: any = {};

  constructor(
    private router: Router,
    private _userRepositoryService: UserRepositoryService
  ) {}

  signIn(credentials: any) {
    this._userRepositoryService.signIn(credentials).subscribe(
      null,
      err => {
        console.log(err, 'Error');
      },
      () => this.router.navigate(['/catalog'])
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
