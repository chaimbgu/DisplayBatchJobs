import {
  BatchJobDescription,
  BatchJobStatus,
  BatchJobDetails,
} from "../../src/types";

export const aBatchJobDescription = (
  overrideFields: Partial<BatchJobDescription> = {},
): BatchJobDescription => {
  return {
    id: "someId",
    metadata: {
      user: "user1",
      group: "group1",
      submitDate: "6.6.2024",
      endDate: "6.6.2024",
    },
    status: BatchJobStatus.FAILED,
    ...overrideFields,
  };
};

export const aBatchJobDetails = (
  overrideFields: Partial<BatchJobDetails> = {},
): BatchJobDetails => {
  return { cmdCommand: "my cmd", logData: "my log data", ...overrideFields };
};
