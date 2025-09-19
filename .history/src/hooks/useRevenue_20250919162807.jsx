import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payments = [], refetch } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment');
      return res.data;
    },
  });
    return [payments, refetch]
};

export default usePayment;