import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-ball',
  templateUrl: './pin-ball.component.html',
  styleUrls: ['./pin-ball.component.scss']
})
export class PinBallComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/images/pin-ball1.png',
      thumbImage: 'assets/images/pin-ball1-400x300.png',
      //alt: 'Photo PinBall',
      //title: 'PinBall'
    },
    {
      image: 'assets/images/pin-ball2.png',
      thumbImage: 'assets/images/pin-ball2-400x300.png',
      //alt: 'Photo PinBall',
      //title: 'PinBall'
    },
    {
      image: 'assets/images/pin-ball3.png',
      thumbImage: 'assets/images/pin-ball3-400x300.png',
      //alt: 'Photo PinBall',
      //title: 'PinBall'
    },
    {
      video: 'https://www.youtube.com/watch?v=7I88jaWgzfg',
      //posterImage: 'assets/img/slider/2_min.jpeg',
      //title: 'Image title'
    },
    // {
    //   video: 'https://youtube.com/shorts/oysqrYJ038I?feature=share',
    //   //posterImage: 'assets/img/slider/2_min.jpeg',
    //   //title: 'Image title'
    // },
];

}
