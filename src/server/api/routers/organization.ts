import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const organizationRouter = createTRPCRouter({
  getByManager: protectedProcedure
    .input(z.object({ manageId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.organization.findMany({
        where: input,
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.organization.create({
        data: {
          name: input.name,
          manager: {
            connect: {
              id: input.id,
            },
          },
        },
      });
    }),
});
