import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useDatabaseUser = () => {

    const axiosPublic = useAxiosPublic();

  const { data: databaseUser = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosPublic.get(`/user?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
};

export default useDatabaseUser