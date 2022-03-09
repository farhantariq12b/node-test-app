import FruitBasket from "./FruitBasket";

const mock = {
  id: '123',
  max_weight: 3,
  contents: [
    {
      type: "apple",
      color: "red",
      weight: 1
    },
    {
      type: "apple",
      color: "red",
      weight: 1
    }
  ]
};

test('Fruits weight should be equal 2', () => {
  const fruitBasket = new FruitBasket(mock.id, mock.max_weight, mock.contents);

  expect(fruitBasket.getBasketWeight()).toBe(2);
});

test('Total weight output should return total fruits', () => {
  const fruitBasket = new FruitBasket(mock.id, mock.max_weight, []);

  expect(fruitBasket.addFruitsToFruitBasket().total_fruits).toBe(0)
});

test('Total fruits output should return 0', () => {
  const fruitBasket = new FruitBasket(undefined, undefined, undefined);

  expect(fruitBasket.addFruitsToFruitBasket().total_fruits).toBe(0)
});