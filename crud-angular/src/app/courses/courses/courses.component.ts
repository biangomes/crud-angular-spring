import { CoursesService } from './../services/courses.service';
import { Courses } from './../model/courses';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Courses[]>;
  displayedColumns = ['name', 'category'];


  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.findAll();
  }

  ngOnInit(): void {
  }

}
