const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n==== DATABASE CONNECTED AND SYNCED ====\n");

  await seedUsers();
  console.log("\n==== USERS DATA SEEDED ====\n");

  await seedPosts();
  console.log("\n==== POSTS DATA SEEDED ====\n");

  await seedComments();
  console.log("\n==== COMMENTS DATA SEEDED ====\n");

  process.exit(0);
};

seedAll();
