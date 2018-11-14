import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'sign-in', component: SignInComponent }
    ])
  ],
  declarations: [RegisterComponent, SignInComponent],
  providers: []
})
export class UsersModule {}
