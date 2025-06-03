export default function LoginForm() {
  return (
    <>
      <div className="w-full max-w-sm">
        <form className="bg-[#F9F9F9] shadow-md rounded-lg px-12 py-10 mb-4 border border-[#999999]">
          <div className="flex flex-col mb-4 items-center">
            <h2 className="uppercase font-bold text-xl">Connec-Fion</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className=" border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            {/* TODO - Faire que la border soit pas rouge si le mot de passe est rempli */}
            <input className="border border-[#999999] rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <a className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800 underline" href="#">
              Mot de passe oublié?
            </a>
          </div>
          <div className="flex flex-col gap-y-2 items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
              <p className="text-xs uppercase">Se connecter</p>
            </button>
            <a className="inline-block align-baseline font-bold text-xs text-gray-600 hover:text-blue-800 underline" href="#">
              inscription
            </a>
          </div>
        </form>
      </div>
    </>
  );
}