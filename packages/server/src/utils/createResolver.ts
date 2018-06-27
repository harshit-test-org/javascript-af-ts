export type Resolver = (
  parent: any,
  args: any,
  context: { user?: any },
  info: any
) => any;

const createResolver = (resolver: Resolver) => {
  const baseResolver = resolver as any;
  baseResolver.createResolver = (childResolver: Resolver) => {
    const newResolver: Resolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

export default createResolver;
