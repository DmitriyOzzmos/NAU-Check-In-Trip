import { Telegraf } from 'telegraf';
// import { Update } from 'telegraf/typings/core/types/typegram';
import { CommandHandlersMap } from './command-handlers.map';
import { CustomContext } from './interfaces';
export class Bot {
  private readonly _bot: Telegraf<CustomContext>;

  constructor(token: string) {
    this._bot = new Telegraf(token);

    this._bot.use(async (ctx, next) => {
      ctx.chatId = await ctx.getChat().then((chat) => chat.id);
      ctx.senderId = ctx.message?.from.id || -1;
      ctx.messageId = ctx.message?.message_id || -1;
      ctx.messageText = (ctx.message as any).text;
      return next();
    });

    this.registerCommandHandlers();
  }

  public start() {
    this._bot.launch();
    console.log('bot started');
  }

  public stop() {
    this._bot.stop();
  }

  private registerCommandHandlers() {
    for (const [key, value] of CommandHandlersMap) {
      this._bot.command(key, value);
    }
  }
}
