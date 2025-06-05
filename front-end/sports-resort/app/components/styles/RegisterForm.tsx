import { Link } from "react-router";
import Button from "./Button";

type RegisterFormProps = {
  coach: boolean;
};

export default function RegisterForm({ coach }: RegisterFormProps) {
  return (
    <>
      <div className="w-full max-w-xl">
        <form className="bg-light-white shadow-md rounded-border px-12 py-10 mb-4 border border-border">
          <div className="flex flex-col mb-6 items-center">
            <h2 className="uppercase font-bold text-xl">Inscrip-Fion</h2>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="lastname">
                Nom
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="firstname">
                Prénom
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text"/>
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="profil-pic">
                Photo de profil
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profil-pic" type="file"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="birthday">
                Date de naissance
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="birthday" type="date" />
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="country">
                Pays
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="ville">
                Ville
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ville" type="text"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="zipcode">
                Code postal
              </label>
              <input className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zipcode" type="text"/>
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="phone">
                Téléphone
              </label>
              <input className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
            </div>
          </div>


          <div className="mb-6">
            <div className="flex gap-x-4">
              <div className="flex-grow">
                <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="password">
                  Mot de passe
                </label>
                <input className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              </div>
              <div className="flex-grow">
                <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="password-confirmation">
                  Confirmer le mot de passe
                </label>
                <input className="border border-border rounded-border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-confirmation" type="password" placeholder="******************" />
              </div>
            </div>

            {/* Attention si c'est un coach */}
            { coach ? (
            <div className="flex gap-x-4">
              <div className="flex-grow">
                <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="sport">
                  Sport
                </label>
                <select name="" id="" className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="france">France</option>
                </select>
              </div>
              <div className="flex-grow">
                <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="document">
                  Documents
                </label>
                <input className="border border-border rounded-border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="document" type="file" />
              </div>
            </div>
            ) : (<div></div>)}

          </div>

          <div className="flex flex-col gap-y-2 items-center justify-between">
            <Button name="S'inscrire"
              className="text-white text-xs"
              href="/"/>
            <Link to="/login" className="inline-block align-baseline font-bold text-xs text-light-text hover:text-blue underline">
              connexion
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}