import React from "react"
import { BatchJob } from "../../types"
import { useGetBatchJobsDetails } from "../../adapters/batchJobs"
import './BatchJobsDetails.css'




export const BatchJobsDetails = (props : Pick<BatchJob, "id">)=>{
    const {id} = props
    const {isFetching, data} = useGetBatchJobsDetails(id)
    return (
    <>
    {isFetching? <div test-id="loader">Loading</div> :
    <div className="jobDeatils">
        <div className="cmd-command">
            <b>Cmd Command:</b><div test-id="job-cmd-command">{data?.cmdCommand}</div>       
       </div>
       <div className="log-data">
            <b>Log Data:</b><div test-id="job-log-data">{data?.logData}</div>       
       </div>
   
    </div>}
    </>)
}