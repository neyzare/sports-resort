import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function SecondaryHeader() {
    return (
        <>
            <div className="px-2 py-3 sm:px-6 max-w-width-container">
                <div className="relative flex h-16 items-between justify-between">
                    <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between ">
                        <div className="flex shrink-0 items-center">
                            <Link to="/">
                                <img
                                    alt="Your Company"
                                    src="medias/images/logo-sport-resort.png"
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>
                        <div className="sm:ml-6 my-auto">
                            <div className="flex space-x-4">
                                <Link to="/"><XMarkIcon aria-hidden="true" className="size-6 group-data-open:block" /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}