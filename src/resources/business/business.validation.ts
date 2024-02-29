import { z } from 'zod';
export namespace BusinessValidation {
  export const Name = {
    body: z
      .object({
        name: z.string().min(2),
      })
      .strict(),
  };
}
