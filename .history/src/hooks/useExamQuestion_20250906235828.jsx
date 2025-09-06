import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useExamQuestion = () => {
    const axiosPublic = useAxiosPublic();

    const { data: questions = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/courses')
            return res.data;
        }
    })
    return [courses, refetch]
};

export default useExamQuestion;