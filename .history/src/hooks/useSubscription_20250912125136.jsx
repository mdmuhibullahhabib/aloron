import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
  const [databaseUser] = useDatabaseUser();
    const axiosSecure = useAxiosSecure();
const user = databaseUser[0];
    console.log(user)

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/subscriptions/user?id=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });
    return [databaseUser, refetch, isLoading]
};


export default useSubscription;