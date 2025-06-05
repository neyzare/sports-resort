import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";
import Hero from "~/components/styles/Hero";
import tennis from "medias/images/tennis.webp"

export default function Sport () {
  return (
    <>
      <Header/>
      <div className=" w-full px-2 sm:px-6 my-container" >
        <div className="bg-light-white rounded-border flex flex-col justify-center items-center my-8 p-4 gap-4 md:gap-12 md:flex-row md:justify-start md:pl-40">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-40 rounded-full"
          />
          <div className="text-center text-base space-y-2 md:text-start">
            <p>Matéo Grange</p>
            <p>France</p>
            <p>admin</p>
          </div>
        </div>
        <div className="bg-light-white rounded-border flex flex-col gap-4 p-4 my-8">
          <h3 className="text-heading3 ml-12">Infos perso</h3>
          <hr className="border-border w-full"/>
          <div className="grid grid-cols-2 gap-4 gap-x-8 md:grid-cols-3 place-items-center">
            <div className="flex flex-col text-center">
              <p className="text-light-text">Nom</p>
              <p>Grange</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Prenom</p>
              <p>Matéo</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Date de naissance</p>
              <p>19/19/1919</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Tél</p>
              <p>0636303630</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Email</p>
              <p>ouioui@gmail.com</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Rôle</p>
              <p>admin</p>
            </div>
          </div>
        </div>
        <div className="bg-light-white rounded-border flex flex-col gap-4 p-4 my-8">
          <h3 className="text-heading3 ml-12">Adresse</h3>
          <hr className="border-border w-full"/>
          <div className="grid grid-cols-2 gap-4 gap-x-8 md:grid-cols-3 place-items-center">
            <div className="flex flex-col text-center">
              <p className="text-light-text">Pays</p>
              <p>France</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Ville</p>
              <p>Orléans</p>
            </div>

            <div className="flex flex-col text-center">
              <p className="text-light-text">Code postal</p>
              <p>45000</p>
            </div>
          </div>
        </div>
        <div className="bg-light-white rounded-border flex flex-col items-center md:flex-row justify-center gap-4 p-4 my-8">
          <Button name="modifier mes infos"
                  className="w-fit"
                  href="/"
          />
          <Button name="supprimer mon compte"
          className="border-red bg-red hover:text-red"
          href="/"
          />
        </div>
      </div>
      <Footer/>
    </>
  )
}