// master-chart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MasterChartService {

  constructor(private http: HttpClient) { }

  getUsersCount() {
    return this.http.get<any>("http://localhost:3000/users");
  }

  getMatiereCount() {
    return this.http.get<any>("http://localhost:3000/matiere");
  }

  getProfesseurCount() {
    return this.http.get<any>("http://localhost:3000/users?type=professeur");
  }
}
