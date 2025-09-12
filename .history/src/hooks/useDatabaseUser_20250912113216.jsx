import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useDatabaseUser = () => {

    const axiosPublic = useAxiosPublic();

    const { data: products = [], refetch } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products')
            return res.data;
        }
    })
    return [products, refetch]
};

export default useDatabaseUser