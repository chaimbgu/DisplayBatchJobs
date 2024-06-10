import React from "react";
import { render } from "@testing-library/react";
import { getElementByTestId, baseTestKit } from "../../../__tests__/BaseDriver";
import { aBatchJobDetails } from "../../../__tests__/builders/batchJobBuilder";

import { BatchJobsDetails } from "./BatchJobsDetails";

describe("Batch job Details", () => {
  const testkit = baseTestKit();
  testkit.beforeAndAfter();
  it("should render cmd command details", () => {
    const jobDetails = aBatchJobDetails();
    testkit.mockGetBatchJobsDetails({ data: jobDetails });
    render(<BatchJobsDetails id={"job id"} />);
    const element = getElementByTestId("job-cmd-command");
    expect(element).toBeInTheDocument();
    expect(element?.textContent).toBe(jobDetails.cmdCommand);
  });

  it("should render log data details", () => {
    const jobDetails = aBatchJobDetails();
    testkit.mockGetBatchJobsDetails({ data: jobDetails });
    render(<BatchJobsDetails id={"job id"} />);
    const element = getElementByTestId("job-log-data");
    expect(element).toBeInTheDocument();
    expect(element?.textContent).toBe(jobDetails.logData);
  });
  it("should not render loader while data fetched", () => {
    render(<BatchJobsDetails id={"job id"} />);
    const element = getElementByTestId("loader");
    expect(element).not.toBeInTheDocument();
  });
  it("should render loader while fetching data", () => {
    testkit.mockGetBatchJobsDetails({ isFetching: true });
    render(<BatchJobsDetails id={"job id"} />);
    const element = getElementByTestId("loader");
    expect(element).toBeInTheDocument();
  });
});
