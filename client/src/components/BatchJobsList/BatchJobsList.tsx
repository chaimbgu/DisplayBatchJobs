import React from "react";
import { useGetBatchJobsList } from "../../adapters/batchJobs";
import { BatchJobsRow } from "../BatchJobRow/BatchJobsRow";
import "./BatchJobsList.css";
export const BatchJobsListHeader = () => {
  return (
    <div test-id="jobs-list-header" className="flex-row header">
      <div className="flex-item"></div>

      <b className="flex-item">Status</b>
      <b className="flex-item">User</b>
      <b className="flex-item">Group</b>
      <b className="flex-item">Start Date</b>
      <b className="flex-item">End Date</b>
    </div>
  );
};

export const BatchJobsList:React.FC = () => {
  const { data, isFetching } = useGetBatchJobsList();
  return isFetching ? (
    <div test-id="loader">Loading</div>
  ) : (
    <div test-id="jobs-list" className="table-container">
      <BatchJobsListHeader />
      {data?.map((jobRow) => <BatchJobsRow key={jobRow.id} {...jobRow} />)}
    </div>
  );
};
