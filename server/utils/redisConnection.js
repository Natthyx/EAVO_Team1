import { createClient } from "redis";


class RedisConnectionPool {
    constructor() {
        this.client = createClient();
        this.isConnected = true;
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
       const GET = promisify(this.client.GET).bind(this.client);
       const result = await GET(key);
       return result;
      }

    async set(key, value, duration) {
       const SET = promisify(this.client.SET).bind(this.client);
       await SET(key, value, 'EX', duration);
       return true;
      }

    async del(key) {
       const DEL = promisify(this.client.DEL).bind(this.client);
       await DEL(key);
       return true;
      }
}
const redisClient = new RedisConnectionPool();
export default redisClient
