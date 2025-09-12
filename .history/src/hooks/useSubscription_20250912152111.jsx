import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
    const [databaseUser] = useDatabaseUser();
    const axiosSecure = useAxiosSecure();

    const enrollUser = databaseUser[0];
        const id = databaseUser[0]?._id;

    console.log("📌 Enrollid:", id);

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user", id],
        queryFn: async () => {
            if (!id) return [];
            const res = await axiosSecure.get(`/subscriptions/user?d=${id}`);
            console.log(res.data);
            return res.data;
        },
        enabled: !!id,
    });
    return [user, refetch, isLoading]
};

export default useSubscription;