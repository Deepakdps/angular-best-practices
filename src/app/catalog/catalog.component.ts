import { Component } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { UserRepositoryService } from 'app/core/user-repository.service';
import { FilterClassesService } from './filtercalsses.service';

@Component({
  styleUrls: ['catalog.component.css'],
  templateUrl: 'catalog.component.html'
})
export class CatalogComponent {
  classes: any[];
  visibleClasses: any[];

  constructor(
    private _catalogRepositoryService: CatalogRepositoryService,
    private _userRepositoryService: UserRepositoryService,
    private _filterClassesService: FilterClassesService
  ) {}

  ngOnInit() {
    this._catalogRepositoryService.getCatalog().subscribe(classes => {
      this.classes = classes;
      this.applyFilter('');
    });
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this._userRepositoryService.enroll(classToEnroll.classId).subscribe(
      null,
      err => {
        console.error(err);
        classToEnroll.processing = false;
      }, //add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this._userRepositoryService.drop(classToDrop.classId).subscribe(
      null,
      err => {
        console.error(err);
        classToDrop.processing = false;
      }, //add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }

  applyFilter(filter) {
    this.visibleClasses = this._filterClassesService.filterClasses(
      filter,
      this.classes
    );
  }
}
