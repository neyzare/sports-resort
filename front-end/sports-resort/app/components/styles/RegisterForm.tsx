export default function RegisterForm() {
  return (
    <>
      <div className="w-full max-w-xl">
        <form className="bg-[#F9F9F9] shadow-md rounded-lg px-12 py-10 mb-4 border border-[#999999]">
          <div className="flex flex-col mb-6 items-center">
            <h2 className="uppercase font-bold text-xl">Inscrip-Fion</h2>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
                Nom
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
                Prénom
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text"/>
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="profil-pic">
                Photo de profil
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profil-pic" type="file"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="birthday">
                Date de naissance
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="birthday" type="date" />
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="country">
                Pays
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="ville">
                Ville
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ville" type="text"/>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="zipcode">
                Code postal
              </label>
              <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zipcode" type="text"/>
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Téléphone
              </label>
              <input className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
            </div>
          </div>



          <div className="mb-6 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password-confirmation">
                Confirmer le mot de passe
              </label>
              <input className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-confirmation" type="password" placeholder="******************" />
            </div>
          </div>

          {/* Attention si c'est un coach */}
          <div className="mb-6 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="sport">
                Sport
              </label>
              <select name="" id="" className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="france">France</option>
              </select>
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="document">
                Documents
              </label>
              <input className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="document" type="file" />
            </div>
          </div>

          <div className="flex flex-col gap-y-2 items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
              <p className="text-xs uppercase">Se connecter</p>
            </button>
            <a className="inline-block align-baseline font-bold text-xs text-gray-600 hover:text-blue-800 underline" href="#">
              connexion
            </a>
          </div>
        </form>
      </div>
    </>
  );
}