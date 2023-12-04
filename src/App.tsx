import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';
import AddRecipePage from './pages/AddRecipePage';
import MyRecipesPage from './pages/MyRecipesPage';
import RecipePage from './pages/RecipePage';
import NotFoundPage from './pages/NotFoundPage';
import ShoppingListPage from './pages/ShoppingListPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 60 seconds
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />

            <Route path="home" element={<HomePage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="cart" element={<ShoppingListPage />} />

            <Route path="recipes">
              <Route index element={<Navigate replace to="all" />} />
              <Route path="all" element={<MyRecipesPage />} />
              <Route path="favourites" element={<FavouritesPage />} />
              <Route path="new" element={<AddRecipePage />} />
              <Route path=":id" element={<RecipePage />} />R
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
