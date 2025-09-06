import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useShop = () => {

    const axiosPublic = useAxiosPublic();

    const { data: shopdata = [], refetch } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products')
            return res.data;
        }
    })
    return [products, refetch]
};


export default useShop;