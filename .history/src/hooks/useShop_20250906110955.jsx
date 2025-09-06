import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useShop = () => {

    const axiosSecure = useAxiosPublic();

    const { data: shopdata = [], refetch } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const res = await axiosSecure.get('/courses')
            return res.data;
        }
    })
    return [shopdata, refetch]
};


export default useShop;