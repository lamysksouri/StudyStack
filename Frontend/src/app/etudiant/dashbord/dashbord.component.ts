import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/interfaces/matiere';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public selectedMatiere: Matiere | null = null;

  onMatiereSelected(matiere: Matiere): void {
    this.selectedMatiere = matiere;
  }
}