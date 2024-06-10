import React from "react";
import { render } from "@testing-library/react";
import {
  getElementByTestId,
  baseTestKit,
  clickElementByTestId,
} from "../../../__tests__/BaseDriver";
import { aBatchJobDescription } from "../../../__tests__/builders/batchJobBuilder";

import { BatchJobsRow } from "./BatchJobsRow";

describe("Batch job row", () => {
  const testkit = baseTestKit();
  testkit.beforeAndAfter();
  it("should render user details", () => {
    const jobDescription = aBatchJobDescription();
    render(<BatchJobsRow {...jobDescription} />);
    const element = getElementByTestId("job-user");
    expect(element).toBeInTheDocument();
    expect(element?.textContent).toBe(jobDescription.metadata.user);
  });
  it("should render group details", () => {
    const jobDescription = aBatchJobDescription();
    render(<BatchJobsRow {...jobDescription} />);
    const element = getElementByTestId("job-group");
    expect(element).toBeInTheDocument();
    expect(element?.textContent).toBe(jobDescription.metadata.group);
  });
  it("should render start date", () => {
    const jobDescription = aBatchJobDescription();
    render(<BatchJobsRow {...jobDescription} />);
    const element = getElementByTestId("job-submit-date");
    expect(element).toBeInTheDocument();
    expect(element?.textContent).toBe(jobDescription.metadata.submitDate);
  });
  it("should render end date", () => {
    const jobDescription = aBatchJobDescription();
    render(<BatchJobsRow {...jobDescription} />);
    const element = getElementByTestId("job-end-date");
    expect(element).toBeInTheDocument();
    expect(element?.textContent).toBe(jobDescription.metadata.endDate);
  });
  it("should render collapse button when component rendered", () => {
    render(<BatchJobsRow {...aBatchJobDescription()} />);
    const element = getElementByTestId("more-icon");
    expect(element).toBeInTheDocument();
  });

  it("should not render job details when component render", async () => {
    render(<BatchJobsRow {...aBatchJobDescription()} />);
    const jobDetails = getElementByTestId("job-details");
    expect(jobDetails).not.toBeInTheDocument();
  });

  it("should render job details when clicking on show more button", async () => {
    render(<BatchJobsRow {...aBatchJobDescription()} />);
    clickElementByTestId("more-icon");

    const jobDetails = getElementByTestId("job-details");
    expect(jobDetails).toBeInTheDocument();
  });

  it("should not render job details when click on show less button", async () => {
    render(<BatchJobsRow {...aBatchJobDescription()} />);
    clickElementByTestId("more-icon");
    clickElementByTestId("less-icon");

    const jobDetails = getElementByTestId("job-details");
    expect(jobDetails).not.toBeInTheDocument();
  });
});
