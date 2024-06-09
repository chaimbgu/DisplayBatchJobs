import React from "react"
import { BatchJobStatus } from "../../../types"
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const  JobStatus =   ({status} :{status: BatchJobStatus})=>{

    switch (status) {
        case BatchJobStatus.FAILED:
            return <ErrorOutlineIcon test-id={`${BatchJobStatus.FAILED}-icon`} color={"error"}/>
            case BatchJobStatus.PENDING:
                return <PauseCircleOutlineIcon test-id={`${BatchJobStatus.PENDING}-icon`} color={"warning"}/>

            case BatchJobStatus.RUNNING:
                return <PlayCircleOutlineIcon test-id={`${BatchJobStatus.RUNNING}-icon`} color={"success"}/>
                case BatchJobStatus.SUCCEEDED:
                    return <CheckCircleOutlineIcon test-id={`${BatchJobStatus.SUCCEEDED}-icon`} color={"success"}/>

                    case BatchJobStatus.TERMINATED:
                        return <HighlightOffIcon test-id={`${BatchJobStatus.TERMINATED}-icon`} color={"error"}/>

    }
}