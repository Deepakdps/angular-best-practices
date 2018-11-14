import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UserRepositoryService } from '../core/user-repository.service';

@Injectable()
export class FilterClassesService {
  filterClasses(filter, classes) {
    if (!filter) return classes;

    if (filter === 'GEN') {
      return this.showOnlyGeneralCourses(classes);
    }

    return classes.filter(c => c.course.courseNumber.startsWith(filter));
  }
  showOnlyGeneralCourses(classes) {
    return classes.filter(
      c =>
        !c.course.courseNumber.startsWith('CH') &&
        !c.course.courseNumber.startsWith('PO') &&
        !c.course.courseNumber.startsWith('SP')
    );
  }
}
