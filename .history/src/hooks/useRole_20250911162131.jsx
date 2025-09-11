import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext)
  const { data: isRole, isPending: isRoleLoading } = useQuery({
    queryKey: ['role'],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      return res.data?.role;
    }
  })
  console.log(isRole)
  return [isRole, isRoleLoading]
};

export default useRole;