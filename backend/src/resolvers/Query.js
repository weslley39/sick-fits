const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');


const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    let user = null;

    if (ctx.request.userId) {
      user = ctx.db.query.user({
        where: { id: ctx.request.userId },
      }, info)
    };

    return user;
  },

  async users(parent, args, ctx, info) {
    if (!ctx.request.userId) throw new Error('You must be logged in!');

    console.log(ctx.request.userId);

    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

    return ctx.db.query.users({}, info);
  }
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
