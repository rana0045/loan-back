import { z } from 'zod';
export var BusinessValidation;
(function (BusinessValidation) {
    BusinessValidation.Name = {
        body: z
            .object({
            name: z.string().min(2),
        })
            .strict(),
    };
})(BusinessValidation = BusinessValidation || (BusinessValidation = {}));
