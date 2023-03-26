import { useReducer } from "react";

const nameReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    if (action.value.length >= 6) {
      return { value: action.value, isValid: true };
    } else {
      return { value: state.value, isValid: false };
    }
  }
};

const CardRecuder = () => {
  const [nameState, dispatchName] = useReducer(nameReducer, { value: '', isValid: false });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    dispatchName({type: 'USER_INPUT', value: e.target.value})
  }

  return(
    <div className="flex p-10 m-10 rounded-lg border shadow">
      <form className="flex items-center justify-center gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            value={nameState.value}
            className= {
              nameState.isValid
              ? "border-4 p-2 rounded w-full border-green-600"
              : "border-4 p-2 rounded w-full border-red-500"
            }
            onChange={handleChange}
          />
          <span className="text-xs font-semibold text-gray-500">Important: Include underscore at the end of your name!</span>
        </div>
        <input
          type="submit"
          value="Submit"
          className="border p-2 rounded bg-green-700 text-white text-sm font-bold px-5"
          />
      </form>
    </div>
  );
}

export default CardRecuder;
