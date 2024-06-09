const enum BatchJobStatus {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    FAILED = "FAILED", 
    SUCCEEDED = "SUCCEEDED",
    TERMINATED = "TERMINATED"
}

type MetaData = {
    user : string,
    group: string,
    submitDate : string,
    endDate: string | undefined
}
type BatchJob = {
    id : number,
    status : BatchJobStatus,
    metadate: MetaData,
    cmdCommand : string,
    logData : string
    
}