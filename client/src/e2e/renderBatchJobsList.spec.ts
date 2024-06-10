import puppeteer, { Browser, Page } from "puppeteer";
import { E2eDriver } from "../../__tests__/e2eDriver";
describe("E2E tests - render batch jobs list", () => {
  let browser: Browser;
  let page: Page;
  let driver: E2eDriver;
  jest.setTimeout(10000);

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    driver = new E2eDriver(page);
    await page.goto(`http://localhost:3000`);
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should be titled "Google"', async () => {
    const element = await driver.waitForJobsList();
    expect(element).toBeDefined();
  });
  it('should be titled "Google"', async () => {
    await driver.expandFirstRow();
    const element = await driver.waitForJobsDetails();
    expect(element).toBeDefined();
  });
});
