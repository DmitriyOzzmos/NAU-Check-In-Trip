import { config } from 'dotenv';

export class ConfigService {
  public static initialize() {
    config();
  }

  public static get<T>(key: string): T {
    if (process.env[key] === undefined) {
      throw new TypeError(`Enviroment ${key} not set!`);
    }
    try {
      return JSON.parse(String(process.env[key])) as T;
    } catch (err) {
      return process.env[key] as unknown as T;
    }
  }
}
