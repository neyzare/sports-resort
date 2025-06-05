import { Link } from "react-router";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from "../styles/Button";
import { useLocation } from 'react-router'
import {useState} from 'react'

const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'Réservation', href: '/reservation', current: false },
    { name: 'Sports', href: '/sports', current: false },
    { name: 'Devenir coach', href: '/register', current: false, coach: true },
]

const menu = [
    { name: 'Profile', href: '/', current: true },
    { name: 'Planning', href: '/', current: false },
    { name: 'Sign out', href: '/', current: false },
]

function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    let location = useLocation()
    const [isLogged, setIsLogged] = useState(false)

    return (
        <Disclosure as="nav" className="bg-light-white">
            <div className="mx-auto px-2 py-3 sm:px-6 max-w-width-container">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between ">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="medias/images/logo-sport-resort.png"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block my-auto">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <>
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            state={item.coach}
                                            className={classNames(
                                              location.pathname == item.href ? 'bg-blue text-white' : 'text-black hover:scale-110 hover:ease-in-out',
                                              'rounded-full px-3 py-2 text-small font-medium hover:scale-110 ease-in-out duration-200',
                                            )}
                                            aria-current={item.current ? 'page' : undefined}>
                                            {item.name}
                                        </Link>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                            <Menu as="div" className="relative ml-3">
                                <div className="flex items-center gap-x-4">
                                    {isLogged == false ?
                                      <>
                                          <Button name="Inscription"
                                                  className="text-white text-xs hover:text-blue-secondary bg-blue-secondary border-blue-secondary hidden md:block"
                                                  href="/register"/>
                                          <Button name="Connexion"
                                                  className="text-white text-xs hidden md:block"
                                                  href="/login"/>
                                      </>
                                      :
                                      <>
                                          <p>Bonjour, Guigui</p>
                                          <MenuButton
                                            className="relative flex rounded-full  text-small focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue focus:outline-hidden">
                                              <span className="absolute -inset-1.5"/>
                                              <span className="sr-only">Open user menu</span>
                                              <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                className="size-12 rounded-full"
                                              />
                                          </MenuButton>
                                      </>
                                    }

                                </div>
                                <MenuItems
                                  transition
                                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-light-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    {menu.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-4 py-2 text-small text-black data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>

                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              location.pathname == item.href ? 'bg-blue text-white' : 'text-black',
                                'block rounded-md px-3 py-2 text-small font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    {isLogged == false ?
                      <div className="flex justify-center">
                          <Button name="Inscription"
                                  className="text-white text-xs hover:text-blue-secondary bg-blue-secondary border-blue-secondary"
                                  href="/register"/>
                          <Button name="Connexion"
                                  className="text-white text-xs"
                                  href="/login"/>
                      </div>
                    :
                      <>
                          oui
                      </>
                    }
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
