import puppeteer  from 'puppeteer'
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  try {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(`#fname`, {timeout, visible: true});

    await page.type(`#fname`, "");
    await page.type(`#lname`, "");

    await Promise.all([
      page.click(`input[name="nameSubmit"]`),
      page.waitForNavigation()
    ])
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})