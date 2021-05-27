import { CommandEnum } from 'src/enums/command.enum';
import { CustomContext } from './interfaces';

type HandlerFunctionType = (ctx: CustomContext) => Promise<void>;

export const CommandHandlersMap = new Map<CommandEnum, HandlerFunctionType>().set(
  CommandEnum.TEST,
  async (ctx: CustomContext) => {
    await ctx.reply(
      `SenderId - ${ctx.senderId}\n ChatId - ${ctx.chatId}\n MessageId - ${ctx.messageId} \n MessageText - ${ctx.messageText}`,
    );
  },
);
