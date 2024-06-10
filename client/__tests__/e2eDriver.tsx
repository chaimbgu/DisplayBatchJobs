import { Page } from "puppeteer";

export class E2eDriver {
  constructor(private page: Page) {}

  public waitForSelector(selector: string) {
    return this.page.waitForSelector(`[test-id="${selector}"]`);
  }

  public waitForJobsList() {
    return this.waitForSelector("jobs-list");
  }
  public waitForJobsDetails() {
    return this.waitForSelector("job-details");
  }

  public async expandFirstRow() {
    const button = await this.waitForSelector("more-icon");
    return button?.click();
  }
}
