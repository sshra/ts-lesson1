export const car:{
  brand: string,
  model: string,
  country: string,
  price: number,
  color: string,
  rating: [string, number][],
} = {
  brand: 'BMW',
  model: 'xDrive30e',
  country: 'Germany',
  price: 50_000,
  color: 'white',
  rating: [
    ['performance', 8.0],
    ['comfort', 8.0],
    ['interior', 8.5],
    ['technology', 8.0],
    ['storage', 8.0],
    ['fuelEconomy', 6.5],
    ['value', 7.5],
    ['wildcard', 8.5],
  ],
};
