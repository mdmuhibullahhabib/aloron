import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
    const axiosSecure = useAxiosSecure();
    const [databaseUser] = useDatabaseUser();

        const id = databaseUser[0]?._id;

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user", id],
        queryFn: async () => {
            if (!id) return [];
            const res = await axiosSecure.get(`/subscriptions/user?id=${id}`);
            console.log(res.data);
            return res.data;
        },
        enabled: !!id,
    });
    return [user, refetch, isLoading]
};

export default useSubscription;