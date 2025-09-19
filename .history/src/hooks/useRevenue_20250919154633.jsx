import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useRevenue = () => {

    const axiosSecure = useAxiosSecure();

    const { data: revenue = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });
    return [revenue, refetch]
};

export default useRevenue;