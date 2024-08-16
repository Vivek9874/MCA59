import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {
  capturedImage: SafeResourceUrl = ''; // Initialize capturedImage

  constructor(private sanitizer: DomSanitizer) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    this.capturedImage = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath || '');
  }
}
