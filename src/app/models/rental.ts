export interface Rental {
  id: number;
  carId: number;
  userId: number;
  firstName: string;
  lastName: string;
  carName: string;
  companyName: string;
  rentDate: Date;
  returnDate: Date;
}
