import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
 
  private matiereIdSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setMatiereId(userId: any): void {
    this.matiereIdSubject.next(userId);
  }

  getMatiereId(): BehaviorSubject<any> {
    return this.matiereIdSubject;
  }
}
