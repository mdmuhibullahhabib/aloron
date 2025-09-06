import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useShop = () => {

    const axiosSecure = useAxiosPublic();

    const { data: courses = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/courses')
            return res.data;
        }
    })
    return [sg, refetch]
};


export default useShop;