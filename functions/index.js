
const functions = require("firebase-functions");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
// Ensure this path is relative to the functions directory if your .next folder is at the root.
// For a typical Next.js project, the .next folder is in the parent directory (project root).
const nextApp = next({ dev, conf: { distDir: "../.next" } });
const handle = nextApp.getRequestHandler();

exports.nextServer = functions.https.onRequest((req, res) => {
  // It's important to ensure that Next.js is properly prepared before handling requests.
  return nextApp.prepare().then(() => handle(req, res));
});
