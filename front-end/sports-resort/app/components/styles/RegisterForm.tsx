import { Link } from "react-router";
import Button from "./Button";
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    criteriaMode: "all"
  });

  const password = watch("password");
  const coachType = watch("coach");

  const onSubmit = data => console.log(data);

  return (
    <>
      <div className="w-full max-w-xl">
        <form className="bg-light-white shadow-md rounded-border px-12 py-10 mb-4 border border-border"
              onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-6 items-center">
            <h2 className="uppercase font-bold text-xl">Inscrip-Fion</h2>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="lastname">
                Nom
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nom" type="text"
                {...register("nom", {
                  required: "This input is required.",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "This input must contain letters only."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nom"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="firstname">
                Prénom
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Prénom" type="text"
                {...register("prenom", {
                  required: "This input is required.",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "This input must contain letters only."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="prenom"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="profil-pic">
                Photo de profil
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photo" type="file"
                {...register("photo")}
              />
              <ErrorMessage
                errors={errors}
                name="photo"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="birthday">
                Date de naissance
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="birthday" type="date"
                {...register("birthday", {
                  required: "This input is required.",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="birthday"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="country">
                Pays
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pays" type="text"
                {...register("pays", {
                  required: "This input is required.",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "This input must contain letters only."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="pays"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="ville">
                Ville
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ville" type="text"
                {...register("ville", {
                  required: "This input is required.",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "This input must contain letters only."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="ville"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="zipcode">
                Code postal
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="zipcode" type="text"
                {...register("zipcode", {
                  required: "This input is required.",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "This input must contain numbers only."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="zipcode"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="phone">
                Téléphone
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text"
                {...register("phone", {
                  required: "This input is required.",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "This input must contain numbers only."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="phone"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="text"
                {...register("email", {
                  required: "This input is required.",
                  pattern: {
                    value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                    message: "This input must be an email."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({messages}) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
          </div>

          <div className="mb-4 flex gap-x-4">
            <div className="flex gap-x-4">
              <div className="flex-grow">
                <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="password">
                  Mot de passe
                </label>
                <input
                  className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="**********"
                  {...register("password", {
                    required: "This input is required.",
                    minLength: {
                      value: 11,
                      message: "This input must exceed 10 characters"
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({messages}) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                      ))
                      : null;
                  }}
                />
              </div>
              <div className="flex-grow">
                <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="password-confirmation">
                  Confirmer le mot de passe
                </label>
                <input
                  className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="verfi" type="password" placeholder="**********"
                  {...register("verif", {
                    required: "This input is required.",
                    validate: value =>
                      value === password || "The passwords do not match",

                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="verif"
                  render={({messages}) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                      ))
                      : null;
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mb-4 gap-x-4">
            <div className="mb-6">
              <div className="flex gap-x-4">
                <div className="flex-grow">
                  <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="password">
                    inscrivez vous en tant que coach
                  </label>
                  <div className="flex flex-row gap-8">
                    <label>
                      <div className="flex gap-1">
                        <input {...register("coach")} type="checkbox" value="Yes"/>
                        oui
                      </div>
                    </label>
                  </div>

                  <ErrorMessage
                    errors={errors}
                    name="coach"
                    render={({messages}) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                          <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                        ))
                        : null;
                    }}
                  />
                </div>
              </div>
            </div>
            {coachType ? (
              <div className="flex gap-x-4">
                <div className="flex-grow">
                  <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="sport">
                    Sport
                  </label>
                  <select name="" id=""
                          className="border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("Title", {required: true})}>
                    <option value="tennis">Tennis</option>
                    <option value="basket">Basket</option>
                  </select>
                </div>
                <div className="flex-grow">
                  <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="document">
                    Documents
                  </label>
                  <input
                    className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="document" type="file"
                    {...register("document", {required: "This input is required.",})}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="document"
                    render={({messages}) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                          <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                        ))
                        : null;
                    }}
                  />
                </div>
              </div>
            ) : (<div></div>)}
          </div>

          <div className="flex flex-col gap-y-2 items-center justify-between">
            <input type="submit"
                   className="bg-blue border-blue hover:text-blue text-xs text-white border-2 rounded-full px-6 py-2 w-fit hover:bg-transparent duration-200 ease-in-out uppercase font-bold m-1"/>

            <Link to="/login"
                  className="inline-block align-baseline font-bold text-xs text-light-text hover:text-blue underline">
              connexion
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}