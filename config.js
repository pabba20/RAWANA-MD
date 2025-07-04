const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "o6kEkJRL#MHT8_RLxk8ooypoqxTpa22sb5E0gBxH_fe0PsHg970w":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:TbUqEfPCWPSLeOcTnVsJTXYzxnAZVcKW@centerbeam.proxy.rlwy.net:58076",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
