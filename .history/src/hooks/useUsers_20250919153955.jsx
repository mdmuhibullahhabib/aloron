import React from 'react'

const useUsers = () => {
  return (
    <div>useUsers</div>
  )
}


  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });
export default useUsers