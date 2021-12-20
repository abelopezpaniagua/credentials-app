import { Component, Input, Output, EventEmitter } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Credential } from 'src/app/models/Credential';

@Component({
  selector: 'app-credentials-preview',
  templateUrl: './credentials-preview.component.html',
  styleUrls: ['./credentials-preview.component.scss']
})
export class CredentialsPreviewComponent {

  @Input() credentials: Credential[];
  @Output() onGotoList: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.credentials = [];
  }

  goToList() {
    this.onGotoList.emit(true);
  }

  printCredentials() {
    let data = document.getElementById('credential-preview');

    html2canvas(data!).then(canvas => {
      const docWidth = 235;
      const docHeight = canvas.height * docWidth / canvas.width;

      const contentDataUrl = canvas.toDataURL('image/png');
      const doc = new jsPDF('l', 'mm', 'a4');
      const position = 15;

      doc.addImage(contentDataUrl, 'PNG', 30, position, docWidth, docHeight)

      doc.save('exportedPdf.pdf');
    })
  }
}
