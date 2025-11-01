import { z, ZodError } from 'zod';

interface IsPizza {
    isPizza: true;
    pizza: z.infer<typeof PizzaSchema>;
}

interface NotPizza {
    isPizza: false;
    errors: ZodError;
}

export type Result = IsPizza | NotPizza;

const PizzaSchema = z.object({
    size: z.number(),
    crust: z.enum(['stuffed', 'normal']),
    isDeepDish: z.boolean().optional().default(false),
    toppings: z
        .array(
            z
                .string()
                .refine(
                    (topping) =>
                        !['pineapple', 'pepper', 'chicken', 'mayo'].includes(
                            topping,
                        ),
                    {
                        message:
                            'Invalid topping: this does not belong on pizza.',
                    },
                ),
        )
        .optional(),
});

export function validatePizza(pizza_object: unknown): Result {
    const resultValid = PizzaSchema.safeParse(pizza_object);
    if (resultValid.success) {
        const result: Result = { isPizza: true, pizza: resultValid.data };
        return result;
    } else {
        const result: Result = { isPizza: false, errors: resultValid.error };
        return result;
    }
}
