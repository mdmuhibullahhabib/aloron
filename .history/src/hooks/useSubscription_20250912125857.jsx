import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
  const [databaseUser] = useDatabaseUser();
    const axiosSecure = useAxiosSecure();


      const enrollUser = databaseUser[0];

// const user = databaseUser[0];
    console.log(databaseUser[0])

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/subscriptions/user?id=${enrollUser?.userId}`);
            return res.data;
        },
        // enabled: !!user?.userId,
    });
    return [user, refetch, isLoading]
};


export default useSubscription;