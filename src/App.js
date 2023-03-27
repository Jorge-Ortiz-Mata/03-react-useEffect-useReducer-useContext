import { useState, useEffect } from 'react';
import './App.css';
import AuthenticationCard from './components/Authentication/AuthenticationCard';
import Header from './components/Header/Header';
import CardRecuder from './components/ReducerComponents/CardReducer';
import WelcomeCard from './components/Welcome/WelcomeCard';
import AuthContext from './store/auth-context';

function App() {
  const [isLogin, setIsLogin] = useState(undefined);

  useEffect(() => {
    const response = localStorage.getItem('user');
    setIsLogin(response);
  }, []);

  const handleLogin = (account) => {
    setIsLogin(true);
    localStorage.setItem('user', true);
  }

  const handleLogout = () => {
    localStorage.removeItem('user', false);
    setIsLogin(false);
  }

  return (
    <AuthContext.Provider value={{otherValid: isLogin}}>
      <Header showLinks={isLogin} closeSession={handleLogout} />
      {
        isLogin
        ? <WelcomeCard />
        : <AuthenticationCard onSubmit={handleLogin} />
      }
      <CardRecuder />
    </AuthContext.Provider>
  );
}

export default App;
