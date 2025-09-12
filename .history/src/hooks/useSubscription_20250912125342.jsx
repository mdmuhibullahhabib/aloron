import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
  const [databaseUser] = useDatabaseUser();
    const axiosSecure = useAxiosSecure();
// const user = databaseUser[0];
    console.log(databaseUser[0])

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/subscriptions/user?id=${user?.userId}`);
            return res.data;
        },
        enabled: !!user?.email,
    });
    return [user, refetch, isLoading]
};


export default useSubscription;