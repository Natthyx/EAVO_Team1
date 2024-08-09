import { promisify } from 'util';
import { createClient } from "redis";


class RedisConnectionPool {
    constructor() {
      this.client = createClient({
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_CLIENT,
            port: process.env.REDIS_PORT
        }
      });
        this.isConnected = true;
        this.client.connect()
        this.client.on('connect', () => {
            console.log(`Redis client connected`)
            this.isconnected = true;
        })
        this.client.on('error', (err) => {
            console.log(`Redis connection error ${err}`);
            this.isconnected = false;
          });
    }

    isAlive() {
        return this.isconnected;
      }

    async get(key) {
       const result = await this.client.GET(key);
       return result;
      }

    async set(key, value, duration) {
       await this.client.SET(key, value, 'EX', duration);
       return true;
      }

    async del(key) {
       await this.client.DEL(key);
       return true;
      }
}
const redisClient = new RedisConnectionPool();
export default redisClient
