import { Component } from '@angular/core';

@Component({
  selector: 'app-heineken',
  templateUrl: './heineken.component.html',
  styleUrls: ['./heineken.component.scss']
})
export class HeinekenComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/heineken1.jpg',
    thumbImage: 'assets/images/heineken1-400x300.jpg',
    //alt: 'Photo Heineken кричи громче',
    //title: 'Heineken кричи громче'
  },
  {
    image: 'assets/images/heineken2.jpg',
    thumbImage: 'assets/images/heineken1-400x300.jpg',
    //alt: 'Photo Heineken кричи громче',
    //title: 'Heineken кричи громче'
  },
  {
    video: 'https://youtu.be/jqlibz3ICOQ',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  },
  {
    video: 'https://www.youtube.com/watch?v=Ax6Bei8gms4',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  },
  {
    video: 'https://www.youtube.com/watch?v=MruPSpJDrJQ',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  },
  {
    video: 'https://www.youtube.com/watch?v=22N4xxzJ-r4',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  },
  {
    video: 'https://www.youtube.com/watch?v=GsWirZvXiTk',
    //posterImage: 'assets/img/slider/2_min.jpeg',
    //title: 'Image title'
  }
];


}
