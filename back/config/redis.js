const redis = require("redis");

let client = null;

const connectRedis = async () => {
  try {
    client = redis.createClient({
      url: process.env.REDIS_URL
    });

    await client.connect();
    console.log("✅ Redis connected");
  } catch (err) {
    console.log("⚠️ Redis not available, using memory cache");
    client = null;
  }
};

connectRedis();

module.exports = client;