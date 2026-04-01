import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RecipeDetails from './pages/RecipeDetails';

const queryClient = new QueryClient();

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipeDetails/:id", element: <RecipeDetails /> },
      { path: "categories/:name", element: <Categories /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {


  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>

  );
}

export default App
