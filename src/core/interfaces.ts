import { Context } from 'telegraf';

export interface CustomContext extends Context {
  senderId: number;

  chatId: number;

  messageId: number;

  messageText: string;
}
