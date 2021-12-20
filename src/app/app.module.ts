import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CredentialFormComponent } from './components/credential-form/credential-form.component';
import { CredentialTableComponent } from './components/credential-table/credential-table.component';
import { CredentialsPreviewComponent } from './components/credentials-preview/credentials-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CredentialFormComponent,
    CredentialTableComponent,
    CredentialsPreviewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
