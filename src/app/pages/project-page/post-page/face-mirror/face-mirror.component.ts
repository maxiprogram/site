import { Component } from '@angular/core';

@Component({
  selector: 'app-face-mirror',
  templateUrl: './face-mirror.component.html',
  styleUrls: ['./face-mirror.component.scss']
})
export class FaceMirrorComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/images/face-mirror/face-mirror1.jpg',
      thumbImage: 'assets/images/face-mirror/face-mirror1-400x300.jpg',
      //alt: 'Face mirror',
      //title: 'FaceMirror'
    },
    {
      image: 'assets/images/face-mirror/face-mirror2.jpg',
      thumbImage: 'assets/images/face-mirror/face-mirror2-400x300.jpg',
      //alt: 'Face mirror',
      //title: 'FaceMirror'
    },
    {
      image: 'assets/images/face-mirror/face-mirror3.jpg',
      thumbImage: 'assets/images/face-mirror/face-mirror3-400x300.jpg',
      //alt: 'Face mirror',
      //title: 'FaceMirror'
    },
    {
      image: 'assets/images/face-mirror/face-mirror.jpg',
      thumbImage: 'assets/images/face-mirror/face-mirror-400x300.jpg',
      //alt: 'Face mirror',
      //title: 'FaceMirror'
    },
    {
      image: 'assets/images/face-mirror/face-mirror4.jpg',
      thumbImage: 'assets/images/face-mirror/face-mirror4-400x300.jpg',
      //alt: 'Face mirror',
      //title: 'FaceMirror'
    },
    {
      video: 'https://youtu.be/Nj1dTMw2Jks',
      //posterImage: 'assets/img/slider/2_min.jpeg',
      //title: 'Image title'
    },
    {
      video: 'https://youtu.be/akbLmZJwgbs',
      //posterImage: 'assets/img/slider/2_min.jpeg',
      //title: 'Image title'
    },
];

}
