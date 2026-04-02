import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";

export default function useMealById(id) {
  return useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const { data } = await api.get(`/lookup.php?i=${id}`);
      return data.meals[0]; 
    },
    enabled: !!id, 
    staleTime: 1000 * 60 * 5,
  });
}
