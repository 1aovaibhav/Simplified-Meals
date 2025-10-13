import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ accessToken: null, refreshToken: null, user: null });
  useEffect(() => {
    const raw = localStorage.getItem('auth');
    if (raw) setAuth(JSON.parse(raw));
  }, []);
  const login = (data) => {
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
  };
  const logout = () => {
    setAuth({ accessToken: null, refreshToken: null, user: null });
    localStorage.removeItem('auth');
  };
  const isAuthenticated = !!auth?.accessToken && !!auth?.user;

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
