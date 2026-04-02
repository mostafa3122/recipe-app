// src/hooks/useMealsByCategory.js
import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";
import { keys } from "../api/queryKeys";


export default function useMealsByCategory(category) {
    return useQuery({
      queryKey: ["meals", category],
      queryFn: async () => {
        const { data } = await api.get(`/filter.php?c=${category}`);
        return data.meals;
      },
      enabled: !!category,
      staleTime: 8000,
    });
}