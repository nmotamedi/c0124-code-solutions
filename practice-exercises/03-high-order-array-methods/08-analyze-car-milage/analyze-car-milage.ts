type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
};
type Mileage = {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
};

export function analyzeCarMileage(cars: Car[]): Mileage {
  const mileageArr = cars.map((car: Car) => car.mileage);
  const totalMileage = mileageArr.reduce(
    (total: number, miles: number) => total + miles,
    0
  );
  const averageMileage = totalMileage / cars.length;
  const highestMileageCar = cars.reduce((highestCar: Car, car: Car) => {
    if (car.mileage > highestCar.mileage) {
      highestCar = car;
    }
    return highestCar;
  });
  const lowestMileageCar = cars.reduce((lowestCar: Car, car: Car) => {
    if (car.mileage < lowestCar.mileage) {
      lowestCar = car;
    }
    return lowestCar;
  });
  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
