import { Courses } from './../model/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Courses[] = [
    {_id: "1", name: "Frameworks backend avançado", category: "Programação backend"}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {

  }

}
