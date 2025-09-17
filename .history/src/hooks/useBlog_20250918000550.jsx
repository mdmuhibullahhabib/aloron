import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useBlog = () => {

    const axiosPublic = useAxiosPublic();

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs')
            return res.data;
        }
    })
    return [journals, refetch]
};


export default useBlog;