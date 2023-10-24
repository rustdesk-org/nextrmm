import { z } from "zod";

export const authDataSchema = z.object({
  email: z.string().email(),
});
