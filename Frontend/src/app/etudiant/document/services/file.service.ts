import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getPDFFiles(id: any) {
    return this.http.get('http://localhost:3000/document/' + id);
  }
}
