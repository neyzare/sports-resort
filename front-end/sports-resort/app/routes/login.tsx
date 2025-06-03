import {Link} from "react-router";
import Button from "~/components/styles/Button";
import LoginForm from "~/components/styles/LoginForm";
import RegisterForm from "~/components/styles/RegisterForm";

export default function Login() {
  return (
    <>
      <Link to="/">Accueil</Link>
      <Button />
      <LoginForm />
      <RegisterForm />
    </>
  );
}
