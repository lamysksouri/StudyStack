import { Component, OnInit } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-gest-formateur',
  templateUrl: './gest-formateur.component.html',
  styleUrls: ['./gest-formateur.component.css']
})
export class GestFormateurComponent implements OnInit{
  private modalRef: NgbModalRef | null = null;
  classes:any[]=[];
  formateurs:any[]=[];
  formations:any[]=[];
  matieres:any[]=[];
  Allforms:any[]=[];
  selectedClasses: any[] = [];
  form!:FormGroup;
  selectedCategory: string = 'all';
  p: number = 1;
  constructor(private http :HttpClient,
    private build :FormBuilder, 
    private modalService: NgbModal,
  ){}
  ngOnInit(): void {
      this.getAllProf();
      this.getAllMatieres();
      
  }

  
  getAllProf=()=> {
    this.http.get('http://localhost:3000/users/professeur/prof').subscribe((res:any) => {
      this.formateurs = res
      
    })
    console.log(this.formateurs);
  }
  getAllMatieres=()=> {
    this.http.get('http://localhost:3000/matiere').subscribe((res:any) => {
      this.matieres = res;
      console.log(this.matieres);
      
    })
   
  }
  getAllClasses=()=> {
    this.http.get('http://localhost:3000/classe').subscribe((res:any) => {
      this.classes = res;
      console.log(this.classes);
      
    })
   
  }
  getSelectedClasses(event: any): void {
    const selectedOptions = event.target.options;
    this.selectedClasses = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        this.selectedClasses.push(selectedOptions[i].value);
      }
    }
    console.log('Classes sélectionnées:', this.selectedClasses);
  }
  delete(id: number) {
    if (!confirm('Are you sure you want to delete this formation?')) {
      return;
    }
  
    this.http.delete('http://localhost:3000/users/' + id).subscribe((res: any) => {
      alert('Deleted successfully');
      this.getAllProf(); 
    }, error => {
      console.error('Erreur lors de la suppression du professeur : ', error);
    });
  }
  
  
  open(content:any)
  {
    this.modalRef =this.modalService.open(content, { size: 'lg' }); 
    this.getAllMatieres();
    this.getAllClasses();
  }


 
}
