import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useCommunity = () => {
    const axiosSecure = useAxiosSecure();

    const { data: community, refetch } = useQuery({
        queryKey: ['community'],
        queryFn: async () => {
            const res = await axiosSecure.get('/community')
            return res.data;
        }
    })
    return [data, refetch]
};

export default useCommunity;