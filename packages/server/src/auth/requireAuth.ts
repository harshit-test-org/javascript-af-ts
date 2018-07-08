import createResolver from "../utils/createResolver";
import { AuthenticationError } from "apollo-server";

const requireAuth: {
  createResolver?: (
    resolver: (
      parent: any,
      args: any,
      context: { user?: any },
      info: any
    ) => any
  ) => any;
} = createResolver((_, __, ctx) => {
  if (!ctx.user || !ctx.user.id) {
    throw new AuthenticationError("Not authenticated");
  }
});

export default requireAuth;
