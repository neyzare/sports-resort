import { Link } from "react-router";
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = data => console.log(data);

  return (
    <div  className="w-full max-w-sm">
      <form className="bg-light-white shadow-md rounded-border px-12 py-10 mb-4 border border-border"
            onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-6 items-center">
          <h2 className="uppercase font-bold text-heading3">Connec-Fion</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Email"
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

        <div className="mb-4">
          <label className="block text-gray-700 text-xsmall font-bold mb-2" htmlFor="email">
            Mdp
          </label>
          <input
            className=" border border-border rounded-border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="paswword" type="password" placeholder="Mdp"
            {...register("mdp", {
              required: "This input is required.",
            // todo -faire la verification du mdp si fau mettre un message d'erreur'
            })}
          />
          <ErrorMessage
            errors={errors}
            name="mdp"
            render={({messages}) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red text-xsmall font-bold mb-2">{message}</p>
                ))
                : null;
            }}
          />
        </div>

        <div className="flex flex-col gap-y-2 items-center justify-between">
          <input type="submit"
                 className="bg-blue border-blue hover:text-blue text-xs text-white border-2 rounded-full px-6 py-2 w-fit hover:bg-transparent duration-200 ease-in-out uppercase font-bold m-1"/>

          <Link to="/register" state={{coach: true}}
                className="inline-block align-baseline font-bold text-xsmall text-light-text hover:text-blue underline">
            inscription
          </Link>
        </div>

      </form>
    </div>
  );
}