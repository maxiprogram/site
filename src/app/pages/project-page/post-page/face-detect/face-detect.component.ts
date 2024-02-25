import { Component } from '@angular/core';

@Component({
  selector: 'app-face-detect',
  templateUrl: './face-detect.component.html',
  styleUrls: ['./face-detect.component.scss']
})
export class FaceDetectComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/facedetect1.png',
    thumbImage: 'assets/images/facedetect1-400x300.png',
    //alt: 'Photo FaceDetect фотобутка',
    //title: 'FaceDetect фотобутка'
  },
  {
    image: 'assets/images/facedetect2.png',
    thumbImage: 'assets/images/facedetect2-400x300.png',
    //alt: 'Photo FaceDetect фотобутка',
    //title: 'FaceDetect фотобутка'
  },
  {
    image: 'assets/images/facedetect3.jpg',
    thumbImage: 'assets/images/facedetect3-400x300.jpg',
    //alt: 'Photo FaceDetect фотобутка',
    //title: 'FaceDetect фотобутка'
  },
  {
    image: 'assets/images/facedetect4.jpg',
    thumbImage: 'assets/images/facedetect4-400x300.jpg',
    //alt: 'Photo FaceDetect фотобутка',
    //title: 'FaceDetect фотобутка'
  },
  {
    image: 'assets/images/facedetect5.jpg',
    thumbImage: 'assets/images/facedetect5-400x300.jpg',
    //alt: 'Photo FaceDetect фотобутка',
    //title: 'FaceDetect фотобутка'
  },
  {
    image: 'assets/images/facedetect6.jpg',
    thumbImage: 'assets/images/facedetect6-400x300.jpg',
    //alt: 'Photo FaceDetect фотобутка',
    //title: 'FaceDetect фотобутка'
  },
];


}
