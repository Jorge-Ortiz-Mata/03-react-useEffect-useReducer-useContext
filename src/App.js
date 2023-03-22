import { useState } from 'react';
import './App.css';
import AuthenticationCard from './components/Authentication/AuthenticationCard';
import Header from './components/Header/Header';
import WelcomeCard from './components/Welcome/WelcomeCard';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true)
  }

  return (
    <>
      <Header showLinks={isLogin} />
      {
        isLogin
        ? <WelcomeCard />
        : <AuthenticationCard onSubmit={handleLogin} />
      }
    </>
  );
}

export default App;
