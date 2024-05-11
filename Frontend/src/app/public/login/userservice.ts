// UserService.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userTypeSubject = new BehaviorSubject<string>(''); // Default is empty, indicating no user
   private userId?:number
  http: any;
  setUserType(type: string) {
    this.userTypeSubject.next(type);
  }

  getUserType() {
    return this.userTypeSubject.asObservable();
  }
  setUserId(userId: number): void {
    this.userId = userId;
  }

  
  getUserId(): any {
    return this.userId;
  }
}
