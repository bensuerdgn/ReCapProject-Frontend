import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarImageService } from './services/car-image.service';


const routes: Routes = [
  {
    path:"", component:CarComponent    
  },
  {
    path:"cars", component:CarComponent   
  },
  {
    path:"cars/brand/:brandid", component:CarComponent   
  },
  {
    path:"cars/color/:colorid", component:CarComponent   
  },
  {
    path:"cars/car-detail/:carid", component:CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }