import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLogin: undefined,
  onLogin: () => {},
  onLogout: () => {},
  onTesting: () => {}
});

export const AuthContextProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const response = localStorage.getItem('user');
    setIsLogin(response);
  }, []);

  const handleLogin = (email) => {
    setIsLogin(true);
    localStorage.setItem('user', email);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLogin(false);
  }

  const handleTesting = () => {
    console.log('You are testing.');
  }

  return (
    <AuthContext.Provider value={{isLogin: isLogin, onLogout: handleLogout, onLogin: handleLogin, onTesting: handleTesting}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
