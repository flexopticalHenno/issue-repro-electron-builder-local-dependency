const { app } = require("electron/main");

console.log("starting up...");

const helloWorld = require("hello-world");
helloWorld();

console.log("shutting down...");
app.quit();
