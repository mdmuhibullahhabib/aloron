import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosPublic';

const useDatabaseUser = () => {

    const axiosSecure = useAxiosSecure();

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