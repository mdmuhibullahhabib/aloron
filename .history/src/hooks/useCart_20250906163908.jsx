import React, { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../Provider/Authprovider';
import useAxiosPublic from './useAxiosPublic';

const useCart = () => {
  const { user } = useContext(AuthContext);
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