
export const enum BatchJobStatus {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    FAILED = "FAILED", 
    SUCCEEDED = "SUCCEEDED",
    TERMINATED = "TERMINATED"
}

export type MetaData = {
    user : string,
    group: string,
    submitDate : string,
    endDate: string | undefined
}

export type BatchJob = {
    id : string,
    status : BatchJobStatus,
    metadata: MetaData,
    cmdCommand : string,
    logData : string
    
}

export type BatchJobDescription  = Pick<BatchJob, "id" | "metadata" | "status">
export type BatchJobDetails  = Pick<BatchJob, "cmdCommand" | "logData">
