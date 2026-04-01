import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";

export default function useMeals() {
  return useQuery({
    queryKey: ["AllMeals"],
    queryFn: async () => {
      const {data} = await api.get("/search.php?s=");
      return data.meals;
    },
    staleTime: 8000,
  });
}
