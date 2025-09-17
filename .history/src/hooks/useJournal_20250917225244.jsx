import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useJournal = () => {

    const axiosPublic = useAxiosPublic();

    const { data: journals = [], refetch } = useQuery({
        queryKey: ['journals'],
        queryFn: async () => {
            const res = await axiosPublic.get('/journals')
            return res.data;
        }
    })
    return [journals, refetch]
};

export default useJournal;