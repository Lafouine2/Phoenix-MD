const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";

module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Disenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_BIO: process.env.AUTO_BIO || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_READ_MSG: process.env.AUTO_READ_MSG || 'false',
  //_________________________________________________________________________________________________________________________________
  AUDIO_DATA: process.env.AUDIO_DATA || "Phoenix-MD;Abhishek Suresh;https://graph.org/file/8976892f2f615077b48cd.jpg",
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURKaUo5ZHdDTkZ4amwxRkY3TU9uQWVSM2I0eEpzRFhhSU1wa21rYnBrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTlVMERDQlNjazR5WUk5QzdORVZ3TDhjODRPSHZDSXYyNTJCNVVGWUNuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHZSbTVCOThQUjZKdGIyWExQKy92VmVJaGxrMm1uMExhRGRhdjcvRVVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTDd6M1BHNU0rNmxQdndYclZXUE1OSE9ORUREdHdURGozNldqKzlya1ZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNamhnV2E0eC9nWjhaaTVqYWlKUWZ5RWs2VkU4TnhXZmFwY2VDQnZFMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit2eW1EUVVhMWFTaXU2QnByakxDRElvU2ozUGRQcENZendqVHlvUDQ3WDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1zcWtvcDdXTUQvd1grcE9MMW5SMHd2aUgzd3UzbXJtRjJDcWtCcngwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGR3UGNlQzliRkR6MWZJMlJILzlYcXUvcnFkSS9rTGhlRVgxdFdxeXlpVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtlelNnTU5SVS9GcWVhRk11MlpydFo3T2c3ZzBzYjJuWitKUldQYlloN3ZYUVRLNTVpdUZLSVpscU9ISUszNmd0UXF1UUcwb3Y5SGVma3J4cXBTR2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJ4cDRoQjdvSS9NWmg0MThsSjR1TDlaekVMcWtubWU0RTJ0b1Z5b0FQRDlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSTzJTZU1FbFJrLWd4N1lVN1NHN1VBIiwicGhvbmVJZCI6ImRhMzMwODZiLWVjYWEtNDA0ZC04M2Y3LTJkMGY1OTc3NTg1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVFFVL2NIcHVNN2dPYzhmUk5PWGpDMXZFZmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhKM282Ty8xMnpEVk9iVVNKdEdYU0IwZFA4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVTRjlLM0JTIiwibWUiOnsiaWQiOiIyMzc2ODYxNDA2NDM6NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnVacWRnQ0VJN1lxN1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib1YyMFl3d3UzSC9IR0J3enp6YmMzcmd5aW9rN0lQMnV5dTFUUmtNSUdIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS0gxOFFGYW5YQjRLQStkSFNaQU9jVkhuSXBmNko0V0VPalBDdVBoUVM5Wmd0dHYyTnRFMkx4UFlrZEhnbHhnNVhGd3hiM1kxc2FtY3NRZkFCS1QrQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9pM0lPNWRJUDU0YWVDeVVTWDlxbkJhOVBBU0tpNXNET2JtLzIyak11S3dodXIxWEdiV2ZUUWMrQjVKMGF3enBOTHVMRTdGRzlTcDdTN3FDVTlCTmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njg2MTQwNjQzOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUZkdEdNTUx0eC94eGdjTTg4MjNONjRNb3FKT3lEOXJzcnRVMFpEQ0JoMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQ3NzU5N30=", //Enter Your Session Id Here
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "237651338525",
  //_________________________________________________________________________________________________________________________________
  SPAM_COUNT: process.env.SPAM_COUNT || "10",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "EN",
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  MENTION_DATA: process.env.MENTION_DATA || "01:43 ━━━●───── 03:50;⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆;919074692450;https://graph.org/file/63942461d4b8d78b360d3.jpg",
  //_________________________________________________________________________________________________________________________________
  MENTION_AUDIO: process.env.MENTION_AUDIO || "https://i.imgur.com/NCifJWe.mp4;https://graph.org/file/ecf0772cb95111796848c.mp4",
  //_________________________________________________________________________________________________________________________________
  MENTION: process.env.MENTION || 'false',
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.PREFIX || '.',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "𝗙𝗼𝘂𝗶𝗻𝗶 𝗕𝗼𝘁| 𝕃𝕠𝕣𝕕 𝔽𝕠𝕦𝕚𝕟𝕚\n━━━━━━━━━━━━━━━\n👋 Salut *@user* Bienvenue Dans notre groupe *@gname*\n*Total Members:* @count\n*Group Description:*\n@gdesc {pp}",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "👋 GoodBye *@user* From *@gname*\n*Total Members:* @count {pp}",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "Brayal| 𝕃𝕠𝕣𝕕 𝔽𝕠𝕦𝕚𝕟𝕚",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "237651338525",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "𝗙𝗼𝘂𝗶𝗻𝗶 𝗕𝗼𝘁",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.MODE || "public",
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-appi-9a0e16f0ca75.herokuapp.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
