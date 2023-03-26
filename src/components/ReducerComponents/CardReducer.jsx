import { useState } from "react";

const CardRecuder = () => {
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(true);
  const [formDisable, setFormDisable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.includes('_')){
      setValidName(true);
    } else {
      setValidName(false);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;

    if(value.length > 6) {
      setFormDisable(false);
    } else {
      setFormDisable(true);
    }

    setName(value);
  }

  return(
    <div className="flex p-10 m-10 rounded-lg border shadow">
      <form className="flex items-center justify-center gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            className= {
              validName
              ? "border p-2 rounded w-full"
              : "border p-2 rounded w-full border-red-500"
            }
            onChange={handleChange}
          />
          <span className="text-xs font-semibold text-gray-500">Important: Include underscore at the end of your name!</span>
        </div>
        <input
          type="submit"
          value="Submit"
          className= {
            formDisable
            ? "border p-2 rounded bg-green-200 text-white text-sm font-bold px-5"
            : "border p-2 rounded bg-green-700 text-white text-sm font-bold px-5"
          }
          disabled={formDisable}
          />
      </form>
    </div>
  );
}

export default CardRecuder;
