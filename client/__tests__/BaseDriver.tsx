import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import * as batchJobsApi from '../src/adapters/batchJobs'
import { aBatchJobDetails, aBatchJobDescription } from './builders/batchJobBuilder';
import { BatchJobDetails, BatchJobDescription } from '../src/types';
export const baseTestKit = ()=>{
    

    const mockGetBatchJobsList = ({data = [aBatchJobDescription()], isFetching = false } : {data?:BatchJobDescription[]; isFetching?: boolean } = {})=> {
        jest.spyOn(batchJobsApi,'useGetBatchJobsList' ).mockReturnValue({
            data,
            isFetching
        } as any)
    }
    
    const mockGetBatchJobsDetails = ({data = aBatchJobDetails(), isFetching = false } : {data?:BatchJobDetails; isFetching?: boolean } = {})=> {
        jest.spyOn(batchJobsApi,'useGetBatchJobsDetails' ).mockReturnValue({
            data,
            isFetching
        } as any)
    }

    const beforeAndAfter = ()=>{
        beforeEach(()=> mockGetBatchJobsDetails())
        beforeEach(()=> mockGetBatchJobsList())
    }

    return {
        beforeAndAfter,
        mockGetBatchJobsDetails,
        mockGetBatchJobsList
    }



}

export const getElementByTestId = (testId :string)=>{
    return screen.queryByTestId(testId)
}


export const getNumberOfElementsWithTestId = (testId :string)=>{
    return screen.getAllByTestId(testId).length
}

export const clickElementByTestId = (testId :string)=>{
    const element =  screen.queryByTestId(testId)
    fireEvent.click(element!)
}

