import { Courses } from './../model/courses';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  // injecao de dependencia do angular
  constructor(private httpClient: HttpClient) { }

  // Retorna um Observable de Objeto
  // Com o .get<Courses> : retorna um Observable de Courses
  findAll() {
    return this.httpClient.get<Courses>(this.API);
  }
}
