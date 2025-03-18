import { Component } from '@angular/core';

@Component({
  selector: 'app-leap-bird',
  templateUrl: './leap-bird.component.html',
  styleUrls: ['./leap-bird.component.scss']
})
export class LeapBirdComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/images/leap-bird/leap_motion.jpg',
      thumbImage: 'assets/images/leap-bird/leap_motion_400x300.jpg',
      //alt: 'Leap bird',
      //title: 'LeapBird'
    },
    {
      image: 'assets/images/leap-bird/leap_motion2.jpg',
      thumbImage: 'assets/images/leap-bird/leap_motion2_400x300.jpg',
      //alt: 'Leap bird',
      //title: 'LeapBird'
    },
    {
      video: 'https://youtu.be/-cWKWDahT3k',
      //posterImage: 'assets/img/slider/2_min.jpeg',
      //title: 'Image title'
    },
    {
      video: 'https://youtu.be/c3G_cAivcrw',
      //posterImage: 'assets/img/slider/2_min.jpeg',
      //title: 'Image title'
    },
];

}
