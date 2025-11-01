# Pizza Package

This is a simple TypeScript package for validating pizza objects. It includes a Zod-based validator and a CLI interface for checking pizza JSON files. A valid pizza includes a size (diameter in inches), a crust (stuffed or normal), whether it is a deep dish pizza or not (optional boolean), and an optional array of toppings, where pineapple, pepper, chicken, and mayo should not be allowed on the pizza.

##  Installation

To install locally:

```bash
npm install
npm install pizza-package // if used as dependence in another project
```

## Example Usage
```
import { validatePizza } from "pizza-package";

const pizza = {
  size: 12,
  crust: "stuffed",
  isDeepDish: true,
  toppings: ["pepperoni", "mushrooms"],
};

const result = validatePizza(pizza);
if (result.isPizza) {
  console.log("Valid pizza!", result.pizza);
} else {
  console.error("Invalid pizza:", result.errors);
}
```

## CLI Usage
Validating a pizza package from the command line:
```
npx ts-node src/pizza_cli.ts --file path/to/pizza.json
```
Or, you use it after building with typescript:
```
npm run build
node dist/pizza_cli.js --file path/to/pizza.json
```

## Running Tests
```
npm test
```