import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageShopOrders = () => {

        const axiosSecure = useAxiosSecure();

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders`)
            return res.data;
        }
    })
  return (
    <div>ManageShopOrders</div>
  )
}

export default ManageShopOrders