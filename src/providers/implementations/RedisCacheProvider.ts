import { createClient, RedisClientType } from "redis";
import { ICacheProvider } from "../ICacheProvider";

export class RedisCacheProvider implements ICacheProvider {
  private readonly redisClient: RedisClientType;

  constructor() {
    this.redisClient = createClient();
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redisClient.get(key);
    return value ? JSON.parse(value) : null;
  }

  async set<T>(key: string, value: T): Promise<void> {
    this.redisClient.set(key, JSON.stringify(value));
  }
}
