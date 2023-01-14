import { Courses } from './../model/courses';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // injecao de dependencia do angular
  constructor(private http: HttpClient) { }

  findAll(): Courses[] {
    return [
      {_id: "1", name: "Angular", category: "front-end"}
    ];
  }
}
