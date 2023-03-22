import AuthenticationForm from "./AuthenticationForm";

const AuthenticationCard = ({onSubmit}) => {

  const handleSubmit = () => {
    onSubmit(true);
  }

  return(
    <section className="border-2 rounded-lg shadow m-20 p-10 flex flex-col">
      <AuthenticationForm onSubmitForm={handleSubmit} />
    </section>
  )
}

export default AuthenticationCard;
