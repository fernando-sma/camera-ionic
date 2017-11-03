import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentPhoto;
  constructor(public navCtrl: NavController, public camera: Camera) {

  }

  getPhoto(type){
    
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType:this.camera.MediaType.PICTURE,
          sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          correctOrientation: true
        };


    this.camera.getPicture(options).then((imageData) => {
      
            this.currentPhoto = 'data:image/jpeg;base64,' + imageData;
      
          }, (err) => {
            // Handle error
            console.log('Deu ruim')
          });
        }

}
