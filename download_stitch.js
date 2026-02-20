const fs = require('fs');
const https = require('https');
const path = require('path');

const dataFile = '/home/saif/.gemini/antigravity/brain/674b6126-c56a-4889-8123-ab2d345183ad/.system_generated/steps/12/output.txt';
const outputDir = '/home/saif/Documents/Ars_new_02/saas-hosting-app/stitch_assets';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      console.log('No URL for', dest);
      resolve();
      return;
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const screens = data.screens || [];
  for (const screen of screens) {
    const title = screen.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    console.log(`Downloading ${title}...`);
    
    if (screen.htmlCode && screen.htmlCode.downloadUrl) {
      await download(screen.htmlCode.downloadUrl, path.join(outputDir, `${title}.html`));
    }
    
    if (screen.screenshot && screen.screenshot.downloadUrl) {
      await download(screen.screenshot.downloadUrl, path.join(outputDir, `${title}.png`));
    }
  }
  console.log('Done!');
}

main().catch(console.error);
