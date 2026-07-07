import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  // Use absolute path to the HTML file
  const htmlPath = 'file://' + path.resolve('og-template.html');
  const outputPath = path.resolve('public', 'assets', 'og-preview.png');

  console.log(`Loading HTML template from: ${htmlPath}`);

  // Launch puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Standard OG image dimensions
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 }); // 2x scale for better quality

  // Go to the HTML file
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });

  // Wait a little extra just in case local images need a moment to render
  await new Promise(r => setTimeout(r, 1000));

  console.log(`Saving screenshot to: ${outputPath}`);
  // Take screenshot
  await page.screenshot({ path: outputPath });

  await browser.close();
  console.log('OG preview image generated successfully!');
})();
