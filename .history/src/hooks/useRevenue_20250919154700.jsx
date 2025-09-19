import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useRevenue = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payment = [], refetch } = useQuery({
    queryKey: ['revenue'],
    queryFn: async () => {
      const res = await axiosSecure.get('/revenue');
      return res.data;
    },
  });
    return [revenue, refetch]
};

export default useRevenue;