import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useDatabaseUser = () => {

    const axiosSecure = useAxiosSecure();

  const { data: databaseUser = [],refetch, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/user?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
    return [databaseUser, refetch, is]

};

export default useDatabaseUser