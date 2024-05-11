import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UserService } from './userservice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [UserService],
})
export class LogModule {}
