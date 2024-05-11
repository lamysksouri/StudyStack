import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from './userservice';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

      public loginForm!:FormGroup;
      public forgotPasswordForm!:FormGroup;
      public showForgotPasswordForm = false;
  password: any;
  type!:any;
      constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private userService :UserService){}
      ngOnInit(): void {

        this.forgotPasswordForm = this.formBuilder.group({
          email: ['']
        });
            this.loginForm=this.formBuilder.group({
              email:[''],
              password:['']
            })
        }
        login = () => {
          this.http.get<any>('http://localhost:3000/users').subscribe((res: any) => {
            const user = res.find((a: any) => {
              return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
            });
            if (user) {
              this.userService.setUserType(user.type);
              this.userService.setUserId(user.id);
              this.loginForm.reset();
              const route = user.type ;
              this.router.navigate([route]);
            } else {
              alert('Utilisateur non trouvé');
            }
          });
        };

        getPasswordById(email: string): Observable<any> {
          return this.http.get(`http://localhost:3000/users/email/${email}`);
        }
        
     sendResetPasswordEmail = () => {
          
          const email = this.forgotPasswordForm.value.email;
        
          
          if (email) {
            this.getPasswordById(email).subscribe(
              (data:any) => {
                
              console.log(data);
                if (data && data.password) {
                  this.password = data.password;
                  console.log(this.password);
                  this.type=data.type;
                  const templateParams = {
                    to_email: email,
                    subject: 'Mot de passe oublié',
                    body: this.password,
                    type:this.type
                  };
                  console.log(templateParams);
                  emailjs.send('service_mgwkd3n', 'template_uh4a0jq', templateParams, "7Dn6x4ZJ1tWizWNrI")
                    .then((response: any) => {
                      console.log('E-mail envoyé avec succès:', response);
                      alert('E-mail de réinitialisation envoyé avec succès.');
                      this.showForgotPasswordForm = false;
                    })
                    .catch((error:any) => {
                      console.error('Erreur lors de l\'envoi de l\'e-mail de réinitialisation :', error);
                      alert('Erreur lors de l\'envoi de l\'e-mail de réinitialisation.');
                    });
                } else {
                  console.error('Mot de passe non trouvé dans la réponse du service.');
              
                }
              },
              error => {
                
                console.error('Erreur lors de la récupération du mot de passe:', error);
               
              }
            );
          } else {
            console.error('Email non défini.');
            
          }
        };
        
        
      }