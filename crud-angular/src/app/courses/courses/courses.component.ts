import { CoursesService } from './../services/courses.service';
import { Courses } from './../model/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Courses[] = [
    {_id: "1", name: "Angular", category: "front-end"}
  ];
  displayedColumns = ['name', 'category'];


  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.coursesService.findAll();
  }

}
