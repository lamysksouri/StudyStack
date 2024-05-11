import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from 'src/app/interfaces/matiere';
import { EventEmitter, Output } from '@angular/core';
import { UserService } from './../../public/login/userservice';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  public lesmatieres: any;
  InfoProf:any;

  @Output() matiereSelected: EventEmitter<Matiere> = new EventEmitter();

  public sousMatiere: Array<String> =['Flux','Courses_Link','Presence','Chat'];

  constructor(private http: HttpClient,private UserService:UserService) { }

  ngOnInit(): void {
    const userId=this.UserService.getUserId();
   this.getMatieresByProf(userId);
   this.getInfoProf(userId);
  }
  

  getMatieresByProf(id:any)
  {
    this.http.get('http://localhost:3000/matiere/'+id).subscribe(data => {
      this.lesmatieres = data;
    });
  }

  getInfoProf(id:any)
  {
    this.http.get('http://localhost:3000/users/'+id).subscribe(data => {
      this.InfoProf= data;
    });
  }
  onMatiereSelected(matiere: Matiere): void {
    this.matiereSelected.emit(matiere);
  }
  
}