import React from "react"
import { useGetBatchJobsList } from "../../adapters/batchJobs"
import { BatchJobsRow } from "../BatchJobRow/BatchJobsRow"
import { BatchJob } from "../../types"
import './BatchJobsList.css'
export const BatchJobsListHeader = ()=>{
    return <div test-id="jobs-list-header" className="flex-table header">
        <div  className="flex-row"></div>

        <b className="flex-row">Status</b>
        <b  className="flex-row">User</b>
        <b  className="flex-row">Group</b>
        <b  className="flex-row">Start Date</b>
        <b  className="flex-row">End Date</b>
    </div>
    
}

export const BatchJobsList = ()=>{
    const {data , isFetching} = useGetBatchJobsList()
    console.log("tttttt", data)
    return isFetching ?  <div test-id="loader">Loading</div> : 
    <div test-id="jobs-list" className="table-container">
    <BatchJobsListHeader/>
    {data?.map((jobRow)=> <BatchJobsRow {...jobRow}/>)}
    </div>
    
}