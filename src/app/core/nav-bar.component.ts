import { Component } from '@angular/core';
import { UserRepositoryService } from './user-repository.service';

@Component({
  selector: 'wb-nav-bar',
  styleUrls: [`./nav-bar.component.css`],
  templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent {
  constructor(private _userRepositoryService: UserRepositoryService) {}

  get currentUser() {
    return this._userRepositoryService.currentUser;
  }

  handleSignOut() {
    this._userRepositoryService.currentUser = null;
  }
}
