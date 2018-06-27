import createResolver from "../utils/createResolver";
import { AuthenticationError } from "apollo-server";

const requireAuth = createResolver((_, __, ctx) => {
  if (!ctx.user || !ctx.user.id) {
    throw new AuthenticationError("Not authenticated");
  }
});

export default requireAuth;
