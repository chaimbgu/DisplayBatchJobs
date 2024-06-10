import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BatchJobDetails, BatchJobDescription } from "../types";

const getBatchJobsList: () => Promise<BatchJobDescription[]> = async () => {
  return (await axios.get("http://localhost:5000/getJobsList")).data;
};

const getBatchJobsDetails: (id: string) => Promise<BatchJobDetails> = async (
  id,
) => {
  return (await axios.get(`http://localhost:5000/getJobDetails/${id}`)).data;
};

export const useGetBatchJobsList = () => {
  return useQuery({
    queryKey: ["jobsList"],
    queryFn: async () => {
      return getBatchJobsList();
    },
    staleTime: Infinity,
  });
};

export const useGetBatchJobsDetails = (jobId: string) => {
  return useQuery({
    queryKey: [`jobDetails${jobId}`],
    queryFn: async () => {
      return getBatchJobsDetails(jobId);
    },
    staleTime: Infinity,
  });
};
