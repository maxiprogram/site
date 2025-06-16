import { Component } from '@angular/core';

@Component({
  selector: 'app-match-three',
  templateUrl: './match-three.component.html',
  styleUrls: ['./match-three.component.scss']
})
export class MatchThreeComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/images/match-three/match-three.png',
      thumbImage: 'assets/images/match-three/match-three_400x300.png',
      //alt: 'Match Three',
      //title: 'MatchThree'
    },
    {
      image: 'assets/images/match-three/match-three2.png',
      thumbImage: 'assets/images/match-three/match-three2_400x300.png',
      //alt: 'Match Three',
      //title: 'MatchThree'
    },
    {
      image: 'assets/images/match-three/match-three3.png',
      thumbImage: 'assets/images/match-three/match-three3_400x300.png',
      //alt: 'Match Three',
      //title: 'MatchThree'
    },
    {
      image: 'assets/images/match-three/match-three4.png',
      thumbImage: 'assets/images/match-three/match-three4_400x300.png',
      //alt: 'Match Three',
      //title: 'MatchThree'
    },
    {
      image: 'assets/images/match-three/match-three5.png',
      thumbImage: 'assets/images/match-three/match-three5_400x300.png',
      //alt: 'Match Three',
      //title: 'MatchThree'
    },
    {
      video: 'https://youtu.be/TZnmlC1QWA4',
      //posterImage: 'assets/img/slider/2_min.jpeg',
      //title: 'Image title'
    },
];

}
