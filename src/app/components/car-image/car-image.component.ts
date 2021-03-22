import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  cars: Car;
  carImages: CarImage[] = [];
  urlPath: string = 'https://localhost:44318';

  constructor(
    private carImagesService: CarImageService,
  ) {}

  ngOnInit(): void {}

  getCarImages(carid: number){
    this.carImagesService.getCarImages(carid).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  
}
