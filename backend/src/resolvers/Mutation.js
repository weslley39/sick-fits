const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO Check if user is logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    console.log(item);

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copu of the updates
    const updates = { ...args };
    // remote the Id from it
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id,
      },
    }, info)
  }
};

module.exports = mutations;
