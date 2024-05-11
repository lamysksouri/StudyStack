import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from '../document.service';
import { FileService } from './services/file.service';
import { HttpClient } from '@angular/common/http';
import { MatiereService } from './../menu/service/matiere.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit, OnDestroy {
  pdfFiles: any = [];
  matiereId: any;
  matiereIdSubscription!: Subscription;

  constructor(private documentService: DocumentService, private fileService: FileService, private http: HttpClient,
    private matiere: MatiereService
  ) { }

  ngOnInit(): void {
    // S'abonner à l'Observable de matiereId
    this.matiereIdSubscription = this.matiere.getMatiereId().subscribe(
      matiereId => {
        this.matiereId = matiereId;
        console.log("matiereId:", this.matiereId);

        // Appeler la méthode getPDFFiles avec l'ID
        this.fileService.getPDFFiles(this.matiereId).subscribe(
          files => {
            this.pdfFiles = files;
            console.log("PDF files:", this.pdfFiles);
          },
          error => {
            console.error('Error retrieving PDF files:', error);
          }
        );
      }
    );
  }

  ngOnDestroy(): void {
    // Se désabonner lors de la destruction du composant
    this.matiereIdSubscription.unsubscribe();
  }
}
