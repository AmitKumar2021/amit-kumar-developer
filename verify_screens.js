const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  const pages = ["/", "/about", "/services", "/resume", "/portfolio", "/contact"];
  for (const p of pages) {
    await page.goto("http://localhost:3000" + p, { waitUntil: "networkidle", timeout: 30000 });
    const name = p === "/" ? "home" : p.replace("/","");
    await page.screenshot({ path: `C:/Users/Devansh Kashyap/Desktop/prortfolio/verify_${name}.png`, fullPage: false });
    console.log("shot: " + name);
  }
  await browser.close();
})();
