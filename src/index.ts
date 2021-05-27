import { Bot } from './core/bot';
import { ConfigService } from './services/config.service';

const init = async () => {
  ConfigService.initialize();
  const token = ConfigService.get<string>('TOKEN');

  const bot = new Bot(token);

  bot.start();
};

init();
