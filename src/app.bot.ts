import { Update, Start, Ctx } from 'nestjs-telegraf';

@Update()
export class AppUpdate {
  @Start()
  async start(@Ctx() ctx: ) {
    await ctx.reply('Welcome');
  }
}
