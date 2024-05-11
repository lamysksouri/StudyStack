import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  resid: any;

  ngOnInit(): void {
   
    this.resid = 0;
  

    this.signForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', Validators.required],
      type: "etudiant",
    });
  
  }
    

  
  

  signUp = () => {
    if (this.signForm.valid) {
      this.http.post<any>('http://localhost:3000/users', this.signForm.value)
        .subscribe((res: any) => {
          alert('Inscription réussie');
          this.signForm.reset();
          this.router.navigate(['login']);
        }, (error) => {
          console.error('Error during signup:', error);
        
        });
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire avant de soumettre.');
    }
  };
  
}