import "dotenv/config";
import { RefreshingAuthProvider } from "@twurple/auth";
import { promises as fs } from "fs";
import { Bot, createBotCommand } from "@twurple/easy-bot";

import tokenData from "./tokens.json" assert { type: "json" };
import reverse from "./commands/reverse.mjs";

// Authenticate.
const authProvider = new RefreshingAuthProvider({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

authProvider.onRefresh(
  async (_, newTokenData) =>
    await fs.writeFile(
      "./tokens.json",
      JSON.stringify(newTokenData, null, 4),
      "UTF-8",
    ),
);

await authProvider.addUserForToken(tokenData, ["chat"]);
console.log("Authentication successful. 🔑");

// Register bot commands.
const bot = new Bot({
  authProvider,
  channels: [process.env.USERNAME],
  commands: [createBotCommand("reverse", reverse)],
});
console.log("Bot is up and running. 🤖");
