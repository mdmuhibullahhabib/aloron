import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
  const [databaseUser] = useDatabaseUser();
    const axiosSecure = useAxiosSecure();

    console.log(user)

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/user?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });
    return [databaseUser, refetch, isLoading]
};


export default useSubscription;