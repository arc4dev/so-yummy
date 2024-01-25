import React, { createContext, useContext, useReducer } from 'react';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

type AuthAction =
  | { type: 'REGISTER' }
  | { type: 'LOGIN'; payload: { user: User } }
  | { type: 'REFRESH'; payload: { user: User } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE'; payload: { user: User } };

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  dispatch: React.Dispatch<AuthAction>;
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'REFRESH':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case 'UPDATE':
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ isAuthenticated, user }, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContextProvider, useAuth };
