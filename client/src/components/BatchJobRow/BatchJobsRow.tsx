import React, { useState } from "react";
import { BatchJob, BatchJobDescription } from "../../types";
import { JobStatus } from "./JobStatus/JobStatus";
import { BatchJobsDetails } from "../BatchJobDetails/BatchJobsDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./BatchJobRow.css";

export const BatchJobsRow = (props: BatchJobDescription) => {
  const { id, metadata, status } = props;
  const { endDate, group, submitDate, user } = metadata;
  const [isCollapse, setIsCollapse] = useState(false);
  const toggleClick = () => setIsCollapse(!isCollapse);
  return (
    <>
      <div test-id="job-row" className="flex-row job-row" onClick={toggleClick}>
        <div className="flex-item">
          {isCollapse ? (
            <ExpandLessIcon test-id="less-icon" />
          ) : (
            <ExpandMoreIcon test-id="more-icon" onClick={toggleClick} />
          )}
        </div>
        <div className="flex-item">
          {<JobStatus test-id="job-status" status={status} />}
        </div>
        <div className="flex-item" test-id="job-group">
          {group}
        </div>
        <div className="flex-item" test-id="job-user">
          {user}
        </div>
        <div className="flex-item" test-id="job-submit-date">
          {submitDate}
        </div>
        <div className="flex-item" test-id="job-end-date">
          {endDate}
        </div>
      </div>
      {isCollapse && (
        <div test-id="job-details" className="job-details-wrapper">
          <BatchJobsDetails id={id} />
        </div>
      )}
    </>
  );
};
