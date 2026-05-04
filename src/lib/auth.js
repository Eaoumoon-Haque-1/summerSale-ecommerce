import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("summer-sale");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  trustedOrigins: [
    "https://summer-sale-ecommerce.vercel.app",
    /https:\/\/summer-sale-ecommerce-.*\.vercel\.app/,
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});