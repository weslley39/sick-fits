const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, ingo) {
    let user = null;

    if (ctx.request.userId) {
      user = ctx.db.query.user({
        where: { id: ctx.request.userId },
      }, info)
    };

    return user;
  }
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
