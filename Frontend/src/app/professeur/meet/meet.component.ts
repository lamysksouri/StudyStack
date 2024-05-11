import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/interfaces/matiere';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit{
  title: string = ''; // Initialize the title property

  ngOnInit(): void {
    // No need to throw an error here
  }

  public selectedMatiere: Matiere | null = null;

  onMatiereSelected(matiere: Matiere): void {
    this.selectedMatiere = matiere;
    this.title = 'meet'; // Set the title property
  }

  redirectToGoogleMeet() {
    window.location.href = 'https://meet.google.com/yjs-mpbw-cpc';
  }
}
