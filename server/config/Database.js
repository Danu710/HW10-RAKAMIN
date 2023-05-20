import { Sequelize } from "sequelize";

const db = new Sequelize("moviesdatabase", "postgres", "danu123", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default db;
