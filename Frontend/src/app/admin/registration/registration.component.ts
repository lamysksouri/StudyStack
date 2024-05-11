import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public signForm!: FormGroup;
  password!:any;
  selectedClasses: any[] = [];
  matieres:any[]=[];
  classes:any[]=[];
  idMatiereSelectionnee:any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  resid: any;

  ngOnInit(): void {
   
    this.getAllMatieres();
    this.getAllClasses();
  
    this.resid = 0;
   this.signForm = this.formBuilder.group({
      id_matiere:[''],
      selectedClasses:[[]],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', Validators.required],
      type: "professeur",
      id: this.resid.toString()
    });
  

    this.calculId().subscribe(newId => {
      console.log("new", newId);
      

      this.signForm.patchValue({
        id: newId.toString()
      });
    });
  }
  
  calculId = (): Observable<number> => {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((users: any[]) => {
        const lastUser = users.length > 0 ? users[users.length - 1] : null;
        const lastId = lastUser ? lastUser.id : 0;
        return parseInt(lastId) + 1;
      })
    );
  };


  signUp = () => {
    if (this.signForm.valid) {
      const postData = {
        ...this.signForm.value,
        selectedClasses: this.selectedClasses // Add selected classes to the form data
      };
  
      this.http.post('http://localhost:3000/users/prof', postData).subscribe(
        (res: any) => {
          alert('Registration completed successfully');
          this.sendPassword(this.signForm.value.email, this.signForm.value.password);
        },
        (error: any) => {
          console.error('Error during signup:', error);
          if (error.error && error.error.text) {
            alert('Error during signup: ' + error.error.text);
          } else {
            alert('Error during signup. Please try again later.');
          }
        }
      );
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  };
  sendPassword = (mail:any,pw:any) => {
          
    const email =mail;
  
  
            this.password = pw;
            const templateParams = {
              to_email: email,
              subject: 'Accés à votre compte',
              body: this.password,
              type:"Professeur"
            };
            console.log(templateParams);
            emailjs.send('service_mgwkd3n', 'template_uh4a0jq', templateParams, "7Dn6x4ZJ1tWizWNrI")
              .then((response: any) => {
                console.log('E-mail envoyé avec succès:', response);
                alert('E-mail envoyé avec succès.');
                
              })

  };
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
  getSelectedMatieres(event: any): void {
    const selectedOptions = event.target.options;
    this.signForm.get('id_matiere')?.setValue(null); // Reset the selected matiere
    for (let i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].selected) {
            this.signForm.get('id_matiere')?.setValue(selectedOptions[i].value);
            break; // Assuming only one matiere can be selected
        }
    }
}
onMatiereChange(event: any) {
  this.idMatiereSelectionnee = event.target.value;
  console.log('ID sélectionné:', this.idMatiereSelectionnee);
  this.signForm.patchValue({ id_matiere: this.idMatiereSelectionnee });
}
}