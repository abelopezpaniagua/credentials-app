import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential } from 'src/app/models/Credential';
import { CredentialService } from 'src/app/services/credential.service';

@Component({
  selector: 'app-credential-table',
  templateUrl: './credential-table.component.html',
  styleUrls: ['./credential-table.component.scss']
})
export class CredentialTableComponent {

  @Output() onPrintCredentials: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSelectCredential: EventEmitter<Credential> = new EventEmitter<Credential>();
  @Output() onUnselectCredential: EventEmitter<Credential> = new EventEmitter<Credential>();

  credentials: Observable<Credential[]>;

  constructor(private credentialService: CredentialService) {
    this.credentials = credentialService.$credentials
  }

  deleteCredential(credential: Credential) {
    this.credentialService.deleteCredential(credential.ci);
  }

  printCredentials() {
    this.onPrintCredentials.emit(true);
  }

  activeToPreview(event: any, credential: Credential) {
    if (event.target.checked) {
      this.onSelectCredential.emit(credential);
    } else {
      this.onUnselectCredential.emit(credential);
    }
  }
}
