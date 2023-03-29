import './App.css';
import AuthenticationCard from './components/Authentication/AuthenticationCard';
import Header from './components/Header/Header';
import CardRecuder from './components/ReducerComponents/CardReducer';
import WelcomeCard from './components/Welcome/WelcomeCard';
import AuthContext from './store/auth-context';
import { useContext } from 'react';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header />
      {
        authCtx.isLogin
        ? <WelcomeCard />
        : <AuthenticationCard />
      }
      <CardRecuder />
    </>
  );
}

export default App;
