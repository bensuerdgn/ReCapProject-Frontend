import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImage[] = [];
  dataLoaded = false;
  filterText = '';
  currentCar: Car;

  imagePath: string = 'https://localhost:44318/Images/defaultCarImage.jpg';

  constructor(
    private carService: CarService,
    private carImagesService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandid']) {
        this.getCarsDetailsByBrand(params['brandid']);
      } else if (params['colorid']) {
        this.getCarsDetailsByColor(params['colorid']);
      } else if (params['carid']) {
        this.getCars(params['carid']);
      } else {
        this.getCarsDetails();
      }
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailsByCarId(carid: number) {
    this.carService.getCarDetailsByCarId(carid).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getSliderClassName(index: Number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
  getCars(carId: number) {
    this.carService.getCars(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  setCurrentCar(car: Car) {
    this.currentCar = car;
  }
}
