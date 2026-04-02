// src/hooks/useCategories.js
import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";
import { keys } from "../api/queryKeys";

export default function useCategories() {
  return useQuery({
    queryKey: keys.categories,
    queryFn: async () => {
      const { data } = await api.get("/categories.php");
      return data.categories;
    },
    staleTime: 1000 * 60 * 10,
  });
}
