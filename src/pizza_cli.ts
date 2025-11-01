import { parseArgs } from 'util';
import { readFileSync } from 'fs';
import { validatePizza } from './pizza-validator';

const { values } = parseArgs({
    options: {
        file: {
            type: 'string',
            short: 'f',
        },
    },
});

const filePath = values.file;
if (!filePath) {
    console.error('Not a valid file path');
    process.exit(1);
}

let pizzaData: unknown;
try {
    const fileContent = readFileSync(filePath, 'utf8');
    pizzaData = JSON.parse(fileContent);
} catch (err) {
    console.error('Failed to read or parse JSON file:', err);
    process.exit(1);
}

const result = validatePizza(pizzaData);
if (result.isPizza) {
    console.log('This is a valid pizza!');
} else {
    console.error('Invalid pizza object:');
    console.error(result.errors);
}
