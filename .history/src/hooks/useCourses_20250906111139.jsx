import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useCourses = () => {

    const axiosSecure = useAxiosPublic();

    const { data: courses = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axios.get('/courses')
            return res.data;
        }
    })
    return [courses, refetch]
};


export default useCourses;