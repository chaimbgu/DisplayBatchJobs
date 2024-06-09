import React from 'react';
import { render } from '@testing-library/react';
import {JobStatus} from './JobStatus'
import { BatchJobStatus } from '../../../types';
import {getElementByTestId} from '../../../../__tests__/BaseDriver'
describe("Job status", ()=> {

it("should render pause icon when job pauesed", ()=>{
    render(<JobStatus status={BatchJobStatus.PENDING}/>)
   const element = getElementByTestId(`${BatchJobStatus.PENDING}-icon`)
    expect(element).toBeInTheDocument()
})
it("should render failed icon when job pauesed", ()=>{
    render(<JobStatus status={BatchJobStatus.FAILED}/>)
   const element = getElementByTestId(`${BatchJobStatus.FAILED}-icon`)
    expect(element).toBeInTheDocument()
})
it("should render running icon when job pauesed", ()=>{
    render(<JobStatus status={BatchJobStatus.RUNNING}/>)
   const element = getElementByTestId(`${BatchJobStatus.RUNNING}-icon`)
    expect(element).toBeInTheDocument()
})
it("should render success icon when job pauesed", ()=>{
    render(<JobStatus status={BatchJobStatus.SUCCEEDED}/>)
   const element = getElementByTestId(`${BatchJobStatus.SUCCEEDED}-icon`)
    expect(element).toBeInTheDocument()
})
it("should render terminate icon when job pauesed", ()=>{
    render(<JobStatus status={BatchJobStatus.TERMINATED}/>)
   const element = getElementByTestId(`${BatchJobStatus.TERMINATED}-icon`)
    expect(element).toBeInTheDocument()
})
})