import AuthContext from "../../store/auth-context";
import { useEffect, useState, useContext } from "react";

const AuthenticationForm = () => {
  const authCtx = useContext(AuthContext);
  const [account, setAccount] = useState({email: '', password: ''});
  const [formEnabled, setFormEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('CHECKING.....');

      if(account.email.length > 1 && account.password.length > 6){
        setFormEnabled(true);
      } else {
        setFormEnabled(false);
      }
    }, 500);

    return () => {
      console.log('RETURNING DUDE!!!');
      clearInterval(timer);
    }
  }, [account]);

  const handleSubmit = (e) => {
    e.preventDefault();

    authCtx.onLogin(account.email);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAccount((prevState) => {
      return {...prevState, [name]: value}
    })
  }

  return(
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex gap-2 items-center">
        <label htmlFor="email" className="w-24 font-bold">Email</label>
        <input type="email" name="email" id="email" className="border p-2 rounded w-full" onChange={handleChange} />
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="password" className="w-24 font-bold">Password</label>
        <input type="password" name="password" id="password" className="border p-2 rounded w-full" onChange={handleChange} />
      </div>
      <div className="flex gap-2 items-center justify-end">
        <input
          type="submit"
          value="Login"
          className= {
            formEnabled
            ? "border p-2 rounded bg-yellow-700 text-white text-sm font-bold px-5"
            : "border p-2 rounded bg-gray-200 text-white text-sm font-bold px-5"
          }
          disabled={
            formEnabled ? false : true
          }
        />
      </div>
    </form>
  );
}

export default AuthenticationForm;
