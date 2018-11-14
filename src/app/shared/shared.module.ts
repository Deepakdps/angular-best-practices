import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [LoadingSpinnerComponent],
  declarations: [LoadingSpinnerComponent]
})
export class SharedModule {}
