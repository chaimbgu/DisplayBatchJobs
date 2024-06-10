import React from "react";
import { render } from "@testing-library/react";
import {
  getElementByTestId,
  baseTestKit,
  getNumberOfElementsWithTestId,
} from "../../../__tests__/BaseDriver";
import { aBatchJobDescription } from "../../../__tests__/builders/batchJobBuilder";

import { BatchJobsList } from "./BatchJobsList";

describe("Batch job Details", () => {
  const testkit = baseTestKit();
  testkit.beforeAndAfter();
  it("should not render loader while data fetched", () => {
    render(<BatchJobsList />);
    const element = getElementByTestId("loader");
    expect(element).not.toBeInTheDocument();
  });
  it("should render loader while fetching data", () => {
    testkit.mockGetBatchJobsList({ isFetching: true });
    render(<BatchJobsList />);
    const element = getElementByTestId("loader");
    expect(element).toBeInTheDocument();
  });

  it("should not render jobs list while fetching data", () => {
    testkit.mockGetBatchJobsList({ isFetching: true });
    render(<BatchJobsList />);
    const element = getElementByTestId("jobs-list");
    expect(element).not.toBeInTheDocument();
  });
  it("should render jobs list", () => {
    render(<BatchJobsList />);
    const element = getElementByTestId("jobs-list");
    expect(element).toBeInTheDocument();
  });
  it("should render jobs list header", () => {
    render(<BatchJobsList />);
    const element = getElementByTestId("jobs-list-header");
    expect(element).toBeInTheDocument();
  });

  it("should render correct number rows", () => {
    testkit.mockGetBatchJobsList({
      data: [
        aBatchJobDescription(),
        aBatchJobDescription(),
        aBatchJobDescription(),
      ],
    });
    render(<BatchJobsList />);
    const numberOfElements = getNumberOfElementsWithTestId("job-row");
    expect(numberOfElements).toEqual(3);
  });
});
