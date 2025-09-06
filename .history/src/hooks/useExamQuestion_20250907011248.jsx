import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useExamQuestion = () => {
    const axiosSecure = useAxiosSecure();

    const { data: questionSet = [], refetch } = useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/questions')
            return res.data;
        }
    })
      console.log(questionSet)

    return [questionSet: daty, refetch]
};

export default useExamQuestion;