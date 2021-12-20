import { Component } from '@angular/core';
import { Credential } from './models/Credential';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'credentials-app';
  previewMode = false;

  credentialsToPreview: Credential[] = [];

  showPreviewMode(onPreviewMode: boolean) {
    this.previewMode = onPreviewMode;
  }

  addToPreviewMode(credential: Credential) {
    this.credentialsToPreview.push(credential);
  }

  removeFromPreviewMode(credential: Credential) {
    this.credentialsToPreview = this.credentialsToPreview.filter(cred => cred.ci !== credential.ci);
  }

  closePreviewMode() {
    this.previewMode = false;
    this.credentialsToPreview = [];
  }
}
