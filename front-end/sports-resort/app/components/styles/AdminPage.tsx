import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react';

export default function Sport () {
  const [status, setStatus] = useState('user')

  return (
    <>
      <Header/>
      <div className=" w-full px-2 sm:px-6 my-container w-full px-2 sm:px-6 my-container">
        <div className="flex flex-col md:flex-row rounded-border my-8">

          <div className="flex flex-col items-center md:flex-row">
            <Button name="gestions user"
                    className="w-fit"
                    href="#"

            />
            <Button name="gestion resources"
                    className="border-red bg-red hover:text-red"
                    href="#"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around bg-light-white rounded-border my-8">


          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                action
              </th>
              <th scope="col" className="px-6 py-3">
                firstname
              </th>
              <th scope="col" className="px-6 py-3">
                lastname
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                rôle
              </th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white border-x border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <div className="w-full flex gap-2">
                  <button><PencilSquareIcon className="size-6"/></button>
                  <button><TrashIcon className="size-6"/></button>

                </div>
              </th>
              <td className="px-6 py-4">
                Admin
              </td>
              <td className="px-6 py-4">
                Test
              </td>
              <td className="px-6 py-4">
                admin@test.com
              </td>
              <td className="px-6 py-4">
                admin
              </td>
            </tr>
            </tbody>
          </table>


        </div>
      </div>
      <Footer/>
    </>
  )
}