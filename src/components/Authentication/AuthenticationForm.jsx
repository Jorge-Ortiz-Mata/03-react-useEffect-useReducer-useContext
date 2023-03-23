import { useState } from "react";

const AuthenticationForm = ({onSubmitForm}) => {
  const [account, setAccount] = useState({email: '', password: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(account);
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
        <input type="submit" value="Login" className="border p-2 rounded bg-yellow-700 text-white text-sm font-bold px-5" />
      </div>
    </form>
  );
}

export default AuthenticationForm;
