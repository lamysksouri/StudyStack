import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:3000/document';

  constructor(private http: HttpClient) { }

  uploadDocument(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}
