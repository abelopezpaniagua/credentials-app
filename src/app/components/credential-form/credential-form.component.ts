import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CredentialService } from 'src/app/services/credential.service';

@Component({
  selector: 'app-credential-form',
  templateUrl: './credential-form.component.html',
  styleUrls: ['./credential-form.component.scss']
})
export class CredentialFormComponent {

  credentialForm = new FormGroup({
    ci: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  })

  constructor(private credentialService: CredentialService) { }

  onSubmit() {
    const credential = this.credentialForm.value

    this.credentialService.addCredential({
      ci: credential.ci,
      name: credential.name
    });

    this.credentialForm.reset();
  }
}
