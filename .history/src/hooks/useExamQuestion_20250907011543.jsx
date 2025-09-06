import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useExamQuestion = () => {
    const axiosSecure = useAxiosSecure();

    const { data, refetch } = useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/questions')
            return res.data;
        }
    })
    console.log(first)
    return [data, refetch]
};

export default useExamQuestion;