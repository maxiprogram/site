import { Component } from '@angular/core';

@Component({
  selector: 'app-neuro-bartender',
  templateUrl: './neuro-bartender.component.html',
  styleUrls: ['./neuro-bartender.component.scss']
})
export class NeuroBartenderComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/mindwave.png',
    thumbImage: 'assets/images/mindwave-400x300.png',
    //alt: 'Photo NeuroBartender',
    //title: 'NeuroBartender'
  },
  {
    image: 'assets/images/neurobartender1.png',
    thumbImage: 'assets/images/neurobartender1-400x300.png',
    //alt: 'Photo NeuroBartender',
    //title: 'NeuroBartender'
  },
  {
    image: 'assets/images/neurobartender2.png',
    thumbImage: 'assets/images/neurobartender2-400x300.png',
    //alt: 'Photo NeuroBartender',
    //title: 'NeuroBartender'
  },
  {
    image: 'assets/images/neurobartender3.png',
    thumbImage: 'assets/images/neurobartender3-400x300.png',
    //alt: 'Photo NeuroBartender',
    //title: 'NeuroBartender'
  },
  {
    image: 'assets/images/neurobartender4.png',
    thumbImage: 'assets/images/neurobartender4-400x300.png',
    //alt: 'Photo NeuroBartender',
    //title: 'NeuroBartender'
  },
  {
    video: 'https://www.youtube.com/watch?v=SkVf58iY6Hk',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  }
];


}
