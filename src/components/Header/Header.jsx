import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.onLogout();
  }

  return(
    <header className="flex w-full p-5 justify-between items-center bg-yellow-400">
      <h2 className="text-2xl font-bold">My app</h2>
      {
        authCtx.isLogin && <ul className="flex gap-5 items-center">
          <li className="font-semibold">Home</li>
          <li className="font-semibold">Contact</li>
          <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-600 text-white font-semibold">Log out</button>
        </ul>
      }
    </header>
  );
}

export default Header;
