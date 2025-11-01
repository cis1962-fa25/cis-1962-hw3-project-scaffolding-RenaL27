import { validatePizza } from "../src/pizza-validator";

test("valid pizza test #1", () => {
    const pizza = {size: 8, crust: "normal"};
    expect(validatePizza(pizza).isPizza).toBe(true);
})

test("valid pizza test #2", () => {
    const pizza = {size: 12, crust: "normal", isDeepDish: true, toppings: ["pepperoni"]};
    expect(validatePizza(pizza).isPizza).toBe(true);
})

test("inalid pizza missing size", () => {
    const pizza = {crust: "normal", isDeepDish: true, toppings: ["pepperoni"]};
    expect(validatePizza(pizza).isPizza).toBe(false);
})

test("invalid crust fails validation", () => {
  const pizza = { size: 10, crust: "thin", toppings: ["onions"] };
  expect(validatePizza(pizza).isPizza).toBe(false);
});