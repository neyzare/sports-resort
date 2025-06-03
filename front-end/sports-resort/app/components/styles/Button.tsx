import {cn} from "~/lib/utils";

type Props = {
    name:string;
    className?:string;
    href:string;
}

export default function Button({name, className, href}: Props) {
    return (
        <>
            <a href={href} className={cn('bg-blue border-blue hover:text-blue text-white border-2 rounded-full px-6 py-2 w-fit hover:bg-transparent duration-200 ease-in-out uppercase font-bold m-1', className)}>
                {name}
            </a>
        </>
    )
}