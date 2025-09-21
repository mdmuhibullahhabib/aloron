import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {

    const axiosSecure = useAxiosSecure();

    const { data: subscriptions = [], refetch } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const res = await axiosSecure.get('/subscriptions');
      return res.data;
    },
  });
    return [subscriptions, refetch]
};

export default useManageSubscriptions