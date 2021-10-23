import React, { Children, useCallback, useEffect, useState } from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState();
  const [loading, setLoading] = useState();
  const [user, setUser] = useState({});

  const fetchToken = useCallback(() => {
    console.log('fetchToken:');
    setUser({
      username: 'Mambans',
      name: 'John Doe',
      email: 'test@test.com',
      mobile: 123456789,
    });
    setIsSignedIn(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(fetchToken, 2500);
  }, [fetchToken]);

  return (
    <AuthContext.Provider value={{ isSignedIn, loading, user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
