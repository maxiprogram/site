import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-ball',
  templateUrl: './pin-ball.component.html',
  styleUrls: ['./pin-ball.component.scss']
})
export class PinBallComponent {
  imageObject: Array<object> = [
  {
    video: 'https://www.youtube.com/watch?v=7I88jaWgzfg',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  },
  {
    video: 'https://youtube.com/shorts/oysqrYJ038I?feature=share',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  },
];

}
