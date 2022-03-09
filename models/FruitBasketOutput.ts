import FruitCount from "./FruitCount";

export default interface FruitBasketOutput {
  id: string;
  total_fruits: number;
  total_weight: number;
  fruit_counts: FruitCount[];
}