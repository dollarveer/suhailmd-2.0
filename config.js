const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="dollarveer88@gmail.com"
global.location="Kisumu, Kenya."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© realer md - ai_vinnie" 


global.devs = "254702528705" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254702528705";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702528705";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_49_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYXJNV1BaL1c1WkI3bU5sNlVndDROb29nZXRPT0xjckVNYjM5aWU4ajd0az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3lhM1dRbk1SaGk1azM0dk9GRlF2d1wiLFxuICBcInBob25lSWRcIjogXCI3YWJlOGJmZC1mNDJlLTQ3ZjgtYTZjNi0yYWQ1NmYxYmI3YjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxMTIsXG4gICAgICA0NSxcbiAgICAgIDE0MCxcbiAgICAgIDQyLFxuICAgICAgNjcsXG4gICAgICA4NyxcbiAgICAgIDIwNSxcbiAgICAgIDI0NixcbiAgICAgIDEwMyxcbiAgICAgIDE0LFxuICAgICAgMTU5LFxuICAgICAgMTg5LFxuICAgICAgMjMwLFxuICAgICAgMTgxLFxuICAgICAgMjIsXG4gICAgICAxNjgsXG4gICAgICAxNDgsXG4gICAgICAxMTYsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgNTYsXG4gICAgICAxNjMsXG4gICAgICAxMjEsXG4gICAgICAxNDUsXG4gICAgICAxOTQsXG4gICAgICA2NSxcbiAgICAgIDE1OSxcbiAgICAgIDg5LFxuICAgICAgMTE1LFxuICAgICAgOTksXG4gICAgICAxMDEsXG4gICAgICAxMTcsXG4gICAgICAxNzYsXG4gICAgICAyMjAsXG4gICAgICAzNCxcbiAgICAgIDEzNCxcbiAgICAgIDEyNyxcbiAgICAgIDI0OSxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzR0g2MkVHUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAyNTI4NzA1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3Mjk3MTg5NzAzNjk4MzoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNenY2MXNRMWJqV3V3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkU3b2R5WXVUeWFaMXNBQzFnamVyejVJOXh6N21CcG4xcVFtV2ZJZ2VSMVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib3VQOEl5bUZEVU50bFNKNkp2SE9yaTNDbGNIVlBTVFpCNjUzdkRReFRLaDJmUWVhT3Q4cEc2YW4wRWd2NEJYUUxiczZidmpNOEc0VXdUQ1h6VmFTQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXdVNHpWOFVDczQzakNCMlNXNmRRa3IvOFpGTVpjSWpWUGtyVUt5Ulc2REk2dGt6NXYzSW9ZdTJNRVQ0ZlA1WjJrZk1mZ0oybWlJRXBqblhOUFpOQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAyNTI4NzA1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTc2MDk4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx3K1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHcrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWXRIY1hQQnNjSENpbC9Rd0dGd0lmU2x2dzJHTFM5TDZidmhyc3UyRXVPVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTI2MDgyMDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU3NTEwNjIyMjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Realer-MD",
  ownername:process.env.OWNER_NAME|| "Ai_Vinnie",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
