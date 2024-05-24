const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347030265675";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6NWZiajc0cUxBMXVQcDYvNndMR3l3RmRZZEh2UkM5YnoyT0ZubnNGNDEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzAyNjU2NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3NENBNzdCNTAzOUVGNkQ5QzgyREIyQThFMzBBN0JCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU1OTQxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzAyNjU2NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU0ODFGNkQwNTEwQUI3RDVFMTQ3QzA1ODQ1NjcxNTBCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU1OTQxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzAyNjU2NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwNTE3MTk5Mzc1RjY5MEQ2RjhBM0Q1MjFEMzE2NERGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU1OTQxOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzAyNjU2NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY3M0FBMkUwNjFCNzIyOTNFQkYzQjJFNUI4MkVGODNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU1OTQxOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHRTZZTTJVZlI2Nm5SM0R5R0I1OGpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmY2YyMWQzLWNiN2YtNDQ4OS04ZTEwLTQ4ZmIyMjMzNWZjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICA4MCxcbiAgICAgIDEsXG4gICAgICAyMjMsXG4gICAgICAxMjYsXG4gICAgICA3MCxcbiAgICAgIDcyLFxuICAgICAgMTcwLFxuICAgICAgNDIsXG4gICAgICAxNCxcbiAgICAgIDc4LFxuICAgICAgMTAxLFxuICAgICAgMTYxLFxuICAgICAgNDcsXG4gICAgICAyMTksXG4gICAgICA2NSxcbiAgICAgIDMwLFxuICAgICAgMTc0LFxuICAgICAgNzksXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAzOSxcbiAgICAgIDI1MCxcbiAgICAgIDI1MixcbiAgICAgIDE4NCxcbiAgICAgIDE5NixcbiAgICAgIDE0NSxcbiAgICAgIDIxOCxcbiAgICAgIDEzMCxcbiAgICAgIDEwMSxcbiAgICAgIDE1OCxcbiAgICAgIDI0OSxcbiAgICAgIDE2LFxuICAgICAgMjE4LFxuICAgICAgMTQ3LFxuICAgICAgMTg1LFxuICAgICAgMjksXG4gICAgICAyMzMsXG4gICAgICAzLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhaUUtSUVRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMwMjY1Njc1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNDU2NTYyOTE2NTgwMzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIQzNic0ZFTFM4d3JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSHQxK3Ftakt5UzdObGxqUURVMGpvZUc3VE9FMS9wcEpEdTBld1ZjN2hIbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQNDZYcjQ5UFg5dGZHMHh2N0RVTFMyb2h0UGprTFNiR0xqS0JHb2piNVNRaHBBWWFGNndPSTN1dVNJcklXOTlaSG9UNTBkNTk4MEdQWGxpMXRlaFRCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTakFPNEs1NU1Lb01vcGdyWHdKd3UxK0NHRUFjcnRiMjdtVXg0clNFNmcwUHVjdVFuMWY4S3VONVloQ2l4ekFlM0MwekZEMTlWaDlNd3JoQkhyaGJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMwMjY1Njc1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjU1OTQxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5pYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmliLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFRNQis0SmZLMnlJbUV2S0hDTmpFak9qdlVGT2d3Y2k3cXZHWXZtSFEybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDY3NDQxNDI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY1NTk0MjE4NjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
