import { useState, useEffect } from 'react';
import './App.css';
import AuthenticationCard from './components/Authentication/AuthenticationCard';
import Header from './components/Header/Header';
import WelcomeCard from './components/Welcome/WelcomeCard';

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
    <>
      <Header showLinks={isLogin} closeSession={handleLogout} />
      {
        isLogin
        ? <WelcomeCard />
        : <AuthenticationCard onSubmit={handleLogin} />
      }
    </>
  );
}

export default App;
