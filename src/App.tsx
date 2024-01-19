import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './components/common/AppLayout';
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
import { Toaster } from 'react-hot-toast';
import { useAuth } from './contexts/authContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RestrictedRoute from './components/auth/RestrictedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StartPage from './pages/StartPage';
import { useEffect, useState } from 'react';
import { refreshUser } from './utils/userApi';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 60 seconds
    },
  },
});

function App() {
  const { dispatch } = useAuth();
  const [lastUrl, setLastUrl] = useState('/home');

  useEffect(() => {
    const refresh = async () => {
      const user = await refreshUser();

      if (!user) return;

      dispatch({
        type: 'REFRESH',
        payload: {
          user,
        },
      });
    };
    refresh();
  }, [dispatch]);

  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem(
        'lastUrl',
        window.location.pathname === '/login'
          ? '/home'
          : window.location.pathname
      );
    };

    setLastUrl(localStorage.getItem('lastUrl') || '/home');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 2500,
          },
          style: {
            fontSize: '1.1rem',
            maxWidth: '500px',
            padding: '1.2rem 1.5rem',
            backgroundColor: 'var(--color-white)',
            color: 'var(--color-black)',
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo={lastUrl} component={<StartPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo={lastUrl} component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo={lastUrl}
                component={<RegisterPage />}
              />
            }
          />

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route element={<Navigate replace to="home" />} />

              <Route path="home" element={<HomePage />} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="cart" element={<ShoppingListPage />} />

              <Route path="recipes">
                <Route index element={<Navigate replace to="all" />} />
                <Route path="all" element={<MyRecipesPage />} />
                <Route path="favourites" element={<FavouritesPage />} />
                <Route path="new" element={<AddRecipePage />} />
                <Route path=":id" element={<RecipePage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
