import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate random commit message
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%#@!^&';
let commitMsg = '';
const length = 8;

for (let i = 0; i < length; i++) {
    commitMsg += chars.charAt(Math.floor(Math.random() * chars.length));
}

console.log(commitMsg); // <- output will be used in commit

// Ensure logs folder exists
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Write log with timestamp
// const timestamp = new Date().toISOString();
const now = new Date();
const timestamp = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
const logPath = path.join(logsDir, 'commit-log.txt');
const logEntry = `[${timestamp}] Commit ID: ${commitMsg}\n`;
fs.appendFileSync(logPath, logEntry);