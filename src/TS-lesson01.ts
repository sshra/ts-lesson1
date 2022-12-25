import { car } from "./modules/car";

const totalVerdict = (
  car: { rating: [string, number][] }
): number => {
  const sumRating: number = car.rating.reduce((acc, item) => {
    console.log(acc, item);
    return item[1] + acc;
  }, 0);
  const verdict: number = sumRating / car.rating.length;
  return verdict;
};

export const carResult:number = totalVerdict(car);