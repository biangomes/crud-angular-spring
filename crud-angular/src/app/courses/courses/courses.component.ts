import { Courses } from './../model/courses';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Courses[] = [];

  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {

  }

}
