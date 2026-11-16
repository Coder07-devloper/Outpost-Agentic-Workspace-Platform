require("dotenv").config();

for (const key of ["DATABASE_URL", "DIRECT_URL"]) {
  try {
    const url = new URL(process.env[key]);

    console.log(`\n${key}`);
    console.log("Username:", decodeURIComponent(url.username));
    console.log("Hostname:", url.hostname);
    console.log("Port:", url.port);
    console.log("Database:", url.pathname);
  } catch (error) {
    console.log(`${key}: Invalid URL`);
  }
}