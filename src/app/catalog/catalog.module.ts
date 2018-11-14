import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FilterClassesService } from './filtercalsses.service';

@NgModule({
  imports: [SharedModule, RouterModule, CommonModule],
  exports: [CatalogComponent],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService, FilterClassesService]
})
export class CatalogModule {}
