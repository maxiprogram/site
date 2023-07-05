import { Component } from '@angular/core';

@Component({
  selector: 'app-merge-camera',
  templateUrl: './merge-camera.component.html',
  styleUrls: ['./merge-camera.component.scss']
})
export class MergeCameraComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/mergecamera1.png',
    thumbImage: 'assets/images/mergecamera1-400x300.jpg',
    //alt: 'Photo Город внутри',
    //title: 'Город внутри'
  },
  {
    image: 'assets/images/mergecamera2.png',
    thumbImage: 'assets/images/mergecamera2-400x300.jpg',
    //alt: 'Photo Город внутри',
    //title: 'Город внутри'
  },
];
}
