import { Link } from "react-router";
import Button from "./Button";

export default function LoginForm() {
  return (
    <>
      <div className="w-full max-w-sm">
        <form className="bg-light-white shadow-md rounded-border px-12 py-10 mb-4 border border-border">
          <div className="flex flex-col mb-6 items-center">
            <h2 className="uppercase font-bold text-heading3">Connec-Fion</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            {/* TODO - Faire que la border soit pas rouge si le mot de passe est rempli */}
            <input className="border border-border rounded-border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <a className="inline-block align-baseline font-bold text-xsmall text-blue hover:text-blue-secondary underline" href="#">
              Mot de passe oublié?
            </a>
          </div>
          <div className="flex flex-col gap-y-2 items-center justify-between">
            <Button name="Se connecter"
              className="text-white text-xs"
              href="/"/>
            {/* TODO - Ajouter le state dans la navbar principal */}
            <Link to="/register" state={{ coach: true }} className="inline-block align-baseline font-bold text-xsmall text-light-text hover:text-blue underline">
              inscription
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}