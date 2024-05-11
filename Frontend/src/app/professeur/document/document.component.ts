import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  documentForm: FormGroup;

  constructor(private docservice: DocumentService) {
    this.documentForm = new FormGroup({
      description: new FormControl(''),
      pdf: new FormControl(null)
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentForm.get('pdf')?.setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('pdf', this.documentForm.get('pdf')?.value);
    formData.append('description', this.documentForm.get('description')?.value);

    this.docservice.uploadDocument(formData).subscribe(
      response => {
        console.log('Document uploaded successfully:', response);
        // Réinitialiser le formulaire après l'upload
        this.documentForm.reset();
      },
      error => {
        console.error('Error uploading document:', error);
      }
    );
  }
}