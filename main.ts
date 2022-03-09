import { readFile } from 'fs';
import { promisify, inspect } from 'util';
import FruitBasket from './models/FruitBasket';

(async () => {

  try {

    const file = await promisify(readFile)('input.json');
    const data: FruitBasket[] = JSON.parse(file.toString());

    const outputJSON = data.map(input => {

      if (!(input && (JSON.stringify(input) !== '{}'))) {
        return
      }

      const fruitsBaskets = new FruitBasket(input.id, input.max_weight, input.contents);

      if (fruitsBaskets.getBasketWeight() > input.max_weight) {
        return
      }

      return fruitsBaskets.addFruitsToFruitBasket();

    }).filter(Boolean)

    console.log('Output data:: ', inspect(outputJSON, false, null, true))
  } catch(err) {

    console.log('Something went wrong while processing:: ', err)

  }

})()

