import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Credential } from '../models/Credential';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private credentials: BehaviorSubject<Credential[]> = new BehaviorSubject<Credential[]>([])
  public $credentials: Observable<Credential[]>;

  constructor() {
    this.retrieveExistingCredentials();
    this.$credentials = this.credentials.asObservable();
  }

  retrieveExistingCredentials() {
    const credentialsValue = localStorage.getItem('credentials');
    if (credentialsValue !== null) {
      const credentials = JSON.parse(credentialsValue);
      this.credentials.next(credentials);
    }
  }

  addCredential(newCredential: Credential) {
    const credentials = this.credentials.value;
    credentials.push(newCredential);
    this.credentials.next(credentials);
    this.syncCredentialWithLocalStorage();
  }

  deleteCredential(ci: string) {
    const credentials = this.credentials.value;
    this.credentials.next(credentials.filter(cred => cred.ci !== ci));
    this.syncCredentialWithLocalStorage();
  }

  syncCredentialWithLocalStorage() {
    const credentials = this.credentials.value;
    localStorage.setItem('credentials', JSON.stringify(credentials));
  }
}
