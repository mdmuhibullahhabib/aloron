import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useCommunity = () => {
    const axiosSecure = useAxiosSecure();

    const { data: posts= [], refetch } = useQuery({
        queryKey: ['community'],
        queryFn: async () => {
            const res = await axiosSecure.get('/community')
            return res.data;
        }
    })
    return [posts, refetch]
};

export default useCommunity;