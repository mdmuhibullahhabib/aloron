import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payment = [], refetch } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get('/paymentS');
      return res.data;
    },
  });
    return [payment, refetch]
};

export default usePayment;