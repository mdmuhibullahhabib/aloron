import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useCart = () => {
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};


export default useCart;