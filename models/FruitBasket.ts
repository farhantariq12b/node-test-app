import Fruit from "./Fruit";
import FruitBasketOutput from "./FruitBasketOutput";
import FruitCount from "./FruitCount";

export default class FruitBasket {
  id: string;
  max_weight: number;
  contents: Fruit[];

  constructor(id: string = '', max_weight: number = 0, contents: Fruit[] = []) {
    this.id = id
    this.max_weight = max_weight
    this.contents = contents
  }

  getBasketWeight(): number {
    return this.contents.reduce((sum: number, fruit: Fruit) => sum + fruit.weight, 0)
  }

  getTotalFruits(): number {
    return this.contents.length
  }

  arrangeUniqueFruits(): FruitCount[] {
    return Array.from(new Set(this.contents.map(s => s.type)))
    .map(type => {
      return {
        type: type,
        count: this.contents.filter(s => s.type === type).length
      }
    })
  }

  addFruitsToFruitBasket(): FruitBasketOutput {
    return {
      id: this.id,
      total_fruits: this.getTotalFruits(),
      total_weight: this.getBasketWeight(),
      fruit_counts: this.arrangeUniqueFruits()
    }
  }
}