// import { defineConfig } from "drizzle-kit";

export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_dv9RQ8pwqzec@ep-young-base-a1uhkznv-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
};
