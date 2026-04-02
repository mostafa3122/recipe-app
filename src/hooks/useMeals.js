import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";
import { keys } from "../api/queryKeys";

export default function useMeals() {
  return useQuery({
    queryKey: keys.recipes,
    queryFn: async () => {
      const { data } = await api.get("/search.php?s=");
      return data.meals;
    },
    staleTime: 8000,
  });
}
export const useRecipeById = (id) => {
  return useQuery({
    queryKey: keys.recipeById(id),
    queryFn: async () => {
      const { data } = await api.get(`/recipes/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
 