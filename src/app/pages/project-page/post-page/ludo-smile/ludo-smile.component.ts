import { Component } from '@angular/core';

@Component({
  selector: 'app-ludo-smile',
  templateUrl: './ludo-smile.component.html',
  styleUrls: ['./ludo-smile.component.scss']
})
export class LudoSmileComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/ludosmile1.png',
    thumbImage: 'assets/images/ludosmile1-400x300.png',
    //alt: 'Photo LudoSmile',
    //title: 'LudoSmile'
  },
  {
    image: 'assets/images/ludosmile2.png',
    thumbImage: 'assets/images/ludosmile2-400x300.png',
    //alt: 'Photo LudoSmile',
    //title: 'LudoSmile'
  },
  {
    image: 'assets/images/ludosmile3.png',
    thumbImage: 'assets/images/ludosmile3-400x300.png',
    //alt: 'Photo LudoSmile',
    //title: 'LudoSmile'
  },
  {
    image: 'assets/images/ludosmile4.png',
    thumbImage: 'assets/images/ludosmile4-400x300.png',
    //alt: 'Photo LudoSmile',
    //title: 'LudoSmile'
  },
  {
    image: 'assets/images/ludosmile5.png',
    thumbImage: 'assets/images/ludosmile5-400x300.png',
    //alt: 'Photo LudoSmile',
    //title: 'LudoSmile'
  },
];

}
