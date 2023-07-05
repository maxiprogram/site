import { Component } from '@angular/core';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio-component.html',
  styleUrls: ['./cardio-component.scss']
})
export class CardioComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/Cardio1.png',
    thumbImage: 'assets/images/Cardio1-400x300.jpg',
    //alt: 'Photo Дневник пациента',
    //title: 'Дневник пациента'
  },
  {
    image: 'assets/images/Cardio2.png',
    thumbImage: 'assets/images/Cardio2-400x300.jpg',
    //alt: 'Photo Дневник пациента',
    //title: 'Дневник пациента'
  },
  {
    image: 'assets/images/Cardio3.png',
    thumbImage: 'assets/images/Cardio3-400x300.jpg',
    //alt: 'Photo Дневник пациента',
    //title: 'Дневник пациента'
  },
];

}
