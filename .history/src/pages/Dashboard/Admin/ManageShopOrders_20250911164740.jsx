import React from 'react'

const  = () => {
        const axiosSecure = useAxiosSecure();

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders`)
            return res.data;
        }
    })
  return (
    <div></div>
  )
}

export default 