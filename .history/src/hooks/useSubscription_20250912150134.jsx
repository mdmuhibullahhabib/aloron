import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useDatabaseUser from './useDatabaseUser';

const useSubscription = () => {
    const [databaseUser] = useDatabaseUser();
    const axiosSecure = useAxiosSecure();

    const id = databaseUser[0]?._id;

    console.log("📌 DatabaseUser:", databaseUser);
    console.log("📌 EnrollUser:", id);

    const { data: user = [], refetch, isLoading } = useQuery({
        queryKey: ["user", enrollUser?.userId],
        queryFn: async () => {
            if (!enrollUser?.userId) return [];
            const res = await axiosSecure.get(`/subscriptions/user?userId=${enrollUser.userId}`);
            console.log(res.data);
            return res.data;
        },
        enabled: !!enrollUser?.userId,
    });
    return [user, refetch, isLoading]
};

export default useSubscription;